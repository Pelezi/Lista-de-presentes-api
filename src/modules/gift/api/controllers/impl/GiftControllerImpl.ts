import { injectable, inject } from 'tsyringe';
import { Request, Response } from 'express';

import { BaseControllerImpl } from '../../../../base/BaseControllerImpl';
import { GiftService } from '../../../business/services/GiftService';

import {
    CreateGiftDTO,
    UpdateGiftDTO,
    GiftDTO
} from '../../../dtos/GiftDTO';


@injectable()
export class GiftControllerImpl
    extends BaseControllerImpl<GiftDTO, CreateGiftDTO, UpdateGiftDTO> {

    constructor(
        @inject('GiftService')
        private giftService: GiftService
    ) {
        super(giftService);
    }

    public async getByGuest(req: Request, res: Response): Promise<Response> {
        const { guestId } = req.params;
        const gifts = await this.giftService.getByGuest(guestId);
        return res.json(gifts);
    }

    public async getAllInfo(req: Request, res: Response): Promise<Response> {
        const { giftId } = req.params;
        const gift = await this.giftService.getAllInfo(giftId);
        return res.json(gift);
    }

}
