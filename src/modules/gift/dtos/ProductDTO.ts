export class ProductDTO {
    id: string;
    idConab: string;
    type: string;
    subType: string;
    name: string;
    picture: string;
    createdAt: Date;
    updatedAt: Date;
    deleteAt: Date;
    createdBy: string;
    updatedBy: string;
    deletedAt: string;
}

export type CreateProductDTO = Omit<ProductDTO, 'id' | 'createdAt' | 'updatedAt'| 'deleteAt' | 'createdBy'| 'updatedBy'| 'deletedAt' >;
export type UpdateProductDTO = Partial<ProductDTO>;
