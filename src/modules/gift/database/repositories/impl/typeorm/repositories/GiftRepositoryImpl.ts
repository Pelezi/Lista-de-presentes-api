import { Gift, GiftGuest } from "../entities/gift.entity";

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
        } else {
            throw new Error(`Convidado não associado a este presente!`);
        }
    }
}