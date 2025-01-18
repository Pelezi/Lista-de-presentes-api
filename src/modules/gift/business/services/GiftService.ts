import { BaseService } from '../../../base/BaseService';

import { 
    GiftDTO,  
    CreateGiftDTO, 
    UpdateGiftDTO 
} from '../../dtos/GiftDTO';

export interface GiftService 
    extends BaseService<GiftDTO, CreateGiftDTO, UpdateGiftDTO> {
        getByGuest(guestId: string): Promise<GiftDTO[]>;
        getAllInfo(giftId: string): Promise<GiftDTO>;

    }
