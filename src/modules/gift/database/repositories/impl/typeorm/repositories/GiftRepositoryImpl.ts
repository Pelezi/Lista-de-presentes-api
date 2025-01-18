import { Gift } from "../entities/gift.entity";

import {
    GiftDTO,
    CreateGiftDTO,
    UpdateGiftDTO
} from "../../../../../dtos/GiftDTO";

import { BaseRepositoryImpl } from '../../../../../../base/BaseRepositoryImpl';
import { FindOptionsWhere } from "typeorm";
import { subDays } from "date-fns";

export class GiftRepositoryImpl
    extends BaseRepositoryImpl<GiftDTO, CreateGiftDTO, UpdateGiftDTO> {

    constructor() {
        super('id', Gift);
    }

    async getByGuest(guestId: string): Promise<GiftDTO[]> {
        const gifts = await this.typeormRepository.createQueryBuilder('gift')
            .leftJoin('gift.guests', 'guest')
            .where('guest.id = :guestId', { guestId })
            .getMany();

        if (!gifts) {
            throw new Error(`Register not found!`);
        }

        return gifts;
    }

    async getAllInfo(giftId: string): Promise<GiftDTO> {
        const gift = await this.typeormRepository.createQueryBuilder('gift')
            .leftJoin('gift.guests', 'guest')
            .select([
                'gift.id',
                'gift.name',
                'gift.photoUrl',
                'gift.quantity',
                'gift.description',
                'guest.id',
                'guest.name',
                'guest.phone',
            ])
            .where('gift.id = :giftId', { giftId })
            .getOne();

        if (!gift) {
            throw new Error(`Register not found!`);
        }

        return gift;
    }

}