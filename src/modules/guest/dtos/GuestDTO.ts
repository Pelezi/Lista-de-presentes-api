export class GuestDTO {
    id: string;
    name: string;
    phone: string;
}

export type CreateGuestDTO = Omit<GuestDTO, 'id' >;
export type UpdateGuestDTO = Partial<GuestDTO>;
