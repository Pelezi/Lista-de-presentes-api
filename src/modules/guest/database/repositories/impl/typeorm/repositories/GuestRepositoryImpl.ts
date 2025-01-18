import { Guest } from "../entities/guest.entity";

import {
    GuestDTO,
    CreateGuestDTO,
    UpdateGuestDTO
} from "../../../../../dtos/GuestDTO";

import { BaseRepositoryImpl } from '../../../../../../base/BaseRepositoryImpl';

export class GuestRepositoryImpl
    extends BaseRepositoryImpl<GuestDTO, CreateGuestDTO, UpdateGuestDTO> {

    constructor() {
        super('id', Guest);
    }

    async getByGift(giftId: string): Promise<GuestDTO[]> {
        const guests = await this.typeormRepository.createQueryBuilder('guest')
            .leftJoin('guest.gifts', 'gift')
            .where('gift.id = :giftId', { giftId })
            .getMany();

        if (!guests) {
            throw new Error(`Register not found!`);
        }

        return guests;
    }

    async getAllInfo(guestId: string): Promise<GuestDTO> {
        const guest = await this.typeormRepository.createQueryBuilder('guest')
            .leftJoin('guest.gifts', 'gift')
            .select([
                'guest.id',
                'guest.name',
                'guest.phone',
                'gift.id',
                'gift.name',
                'gift.photoUrl',
                'gift.quantity',
                'gift.description',
            ])
            .where('guest.id = :guestId', { guestId })
            .getOne();

        if (!guest) {
            throw new Error(`Register not found!`);
        }

        return guest;
    }

}