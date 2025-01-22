import { Gift, GiftGuest } from "../entities/gift.entity";
import { sendTelegramMessage } from "../../../../../../../config/telegram-bot-api";
import {
    GiftDTO,
    CreateGiftDTO,
    UpdateGiftDTO
} from "../../../../../dtos/GiftDTO";
import { BaseRepositoryImpl } from '../../../../../../base/BaseRepositoryImpl';

export class GiftRepositoryImpl
    extends BaseRepositoryImpl<GiftDTO, CreateGiftDTO, UpdateGiftDTO> {

    constructor() {
        super('id', Gift);
    }

    async getByGuest(guestId: string): Promise<GiftDTO[]> {
        const gifts = await this.typeormRepository.createQueryBuilder('gift')
            .leftJoin('gift.guests', 'guests')
            .leftJoin('guests.guest', 'guest')
            .select([
                'gift.id',
                'gift.name',
                'gift.photoUrl',
                'gift.quantity',
                'gift.description',
                'guests.count',
            ])
            .where('guest.id = :guestId', { guestId })
            .getMany();

        if (!gifts) {
            throw new Error(`Registro não encontrado!`);
        }

        return gifts;
    }

    async getAllInfo(giftId: string): Promise<GiftDTO> {
        const gift = await this.typeormRepository.createQueryBuilder('gift')
            .leftJoin('gift.guests', 'guests')
            .leftJoin('guests.guest', 'guest')
            .select([
                'gift.id',
                'gift.name',
                'gift.photoUrl',
                'gift.quantity',
                'gift.description',
                'guests.count',
                'guest.id',
                'guest.name',
                'guest.phone',
            ])
            .where('gift.id = :giftId', { giftId })
            .getOne();

        if (!gift) {
            throw new Error(`Registro não encontrado!`);
        }

        return gift;
    }

    async addGiftToGuest(giftId: string, guestId: string): Promise<GiftDTO> {
        const gift = await this.getAllInfo(giftId);

        if (!gift) {
            throw new Error(`Registro não encontrado!`);
        }

        const totalGuestCount = gift.guests.reduce((sum, guest) => sum + guest.count, 0);
        if (totalGuestCount >= gift.quantity) {
            throw new Error(`Este presente não pode mais ser resgatado.`);
        }

        const giftGuestRepository = this.typeormRepository.manager.getRepository(GiftGuest);
        let giftGuest = await giftGuestRepository.findOne({ where: { gift: { id: giftId }, guest: { id: guestId } } });

        if (giftGuest) {
            giftGuest.count += 1;
        } else {
            giftGuest = giftGuestRepository.create({ gift, guest: { id: guestId }, count: 1 });
        }

        await giftGuestRepository.save(giftGuest);

        const addedGift = await this.getAllInfo(giftId);

        if (!addedGift) {
            throw new Error(`Registro não encontrado!`);
        } else if (!addedGift.guests) {
            throw new Error(`Erro ao salvar o presente!`);
        } else {
            const guest = addedGift.guests.find(g => g.guest.id === guestId);
            const guestName = guest ? guest.guest.name : 'Convidado';
            sendTelegramMessage('addGiftToGuest', guestName, gift.name);
            return addedGift;
        }
    }

    async removeGiftFromGuest(giftId: string, guestId: string): Promise<void> {
        const gift = await this.getAllInfo(giftId);

        if (!gift) {
            throw new Error(`Registro não encontrado!`);
        }

        const giftGuestRepository = this.typeormRepository.manager.getRepository(GiftGuest);
        let giftGuest = await giftGuestRepository.findOne({ where: { gift: { id: giftId }, guest: { id: guestId } } });

        if (giftGuest) {
            giftGuest.count -= 1;
            if (giftGuest.count <= 0) {
                await giftGuestRepository.remove(giftGuest);
            } else {
                await giftGuestRepository.save(giftGuest);
            }

            const guest = gift.guests.find(g => g.guest.id === guestId);
            const guestName = guest ? guest.guest.name : 'Convidado';
            sendTelegramMessage('removeGiftFromGuest', guestName, gift.name);
        } else {
            throw new Error(`Convidado não associado a este presente!`);
        }
    }

    async getItems(): Promise<GiftDTO[]> {
        const gifts = await this.typeormRepository.createQueryBuilder('gift')
            .leftJoin('gift.guests', 'guests')
            .leftJoin('guests.guest', 'guest')
            .select([
                'gift.id',
                'gift.name',
                'gift.photoUrl',
                'gift.quantity',
                'gift.description',
                'COALESCE(SUM(guests.count), 0) as totalCount',
            ])
            .groupBy('gift.id')
            .orderBy('CASE WHEN COALESCE(SUM(guests.count), 0) = 0 THEN 0 ELSE 1 END', 'ASC')
            .addOrderBy('CASE WHEN COALESCE(SUM(guests.count), 0) >= gift.quantity THEN 1 ELSE 0 END', 'ASC')
            .addOrderBy('COALESCE(SUM(guests.count), 0)', 'ASC')
            .getRawMany();

        if (!gifts) {
            throw new Error(`Registro não encontrado!`);
        }

        return gifts.map(gift => ({
            id: gift.gift_id,
            name: gift.gift_name,
            photoUrl: gift.gift_photo_url,
            quantity: gift.gift_quantity,
            description: gift.gift_description,
            guests: [],
            count: Number(gift.totalcount),
        }));
    }

    async createItem(item: CreateGiftDTO): Promise<GiftDTO> {
        const newItem = this.typeormRepository.create(item as CreateGiftDTO);
        const savedItem = await this.typeormRepository.save(newItem);

        const guest = await this.typeormRepository.manager.getRepository('Guest').findOne({ where: { id: item.guestId } });
        const chat = guest.phone === '81998625899' ? 2 : guest.phone === '81997250606' ? 1 : null;
        sendTelegramMessage('createGift', guest.name, item.name, chat);

        return savedItem;
    }

    async updateItemByUuid(id: string, item: UpdateGiftDTO): Promise<GiftDTO> {
        const guest = await this.typeormRepository.manager.getRepository('Guest').findOne({ where: { id: item.guestId } });
        // remove guestId from item
        delete item.guestId;
        console.log("item:", item);
        await this.typeormRepository.update(id, item);
        console.log("updated");
        const updatedItem = await this.typeormRepository.findOne({
            where: { id: String(id) }
        });

        const chat = guest.phone === '81998625899' ? 2 : guest.phone === '81997250606' ? 1 : null;
        sendTelegramMessage('updateGift', guest.name, item.name, chat);

        return updatedItem;
    }

    async deleteItemByUuid(id: string, item: string): Promise<void> {
        const gift = await this.typeormRepository.findOne({ where: { id } });
        const guest = await this.typeormRepository.manager.getRepository('Guest').findOne({ where: { id: item } });
        const chat = guest.phone === '81998625899' ? 2 : guest.phone === '81997250606' ? 1 : null;
        sendTelegramMessage('deleteGift', guest.name, gift.name, chat);

        await this.typeormRepository.delete(id);
    }

    async telegramMessage(type: string, guest: string): Promise<void> {
        const action = type === 'bio' ? 'encontrou a T.A.R.D.I.S. escondida' : type === 'rickroll' ? 'foi rickrollado' : 'realizou uma ação desconhecida';
        const icon = type === 'bio' ? '\ud83d\ude80' : type === 'rickroll' ? '\uD83D\uDD7A' : '\u26a0';
        const message = `${icon} ${guest} ${action}!`;

        sendTelegramMessage('custom', guest, 'custom', 3, message);

    }

}