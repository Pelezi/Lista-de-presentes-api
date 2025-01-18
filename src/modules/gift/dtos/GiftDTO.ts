export class GiftDTO {
    id: string;
    name: string;
    photoUrl: string;
    quantity: number;
    description: string;
}

export type CreateGiftDTO = Omit<GiftDTO, 'id' >;
export type UpdateGiftDTO = Partial<GiftDTO>;
