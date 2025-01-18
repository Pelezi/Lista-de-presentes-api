import { 
    ProductDTO, 
    CreateProductDTO, 
    UpdateProductDTO 
} from '../../dtos/ProductDTO';

import { BaseRepository } from '../../../base/BaseRepository';

export interface ProductRepository 
    extends BaseRepository<ProductDTO, CreateProductDTO, UpdateProductDTO> {
        getByUser(userId: string): Promise<ProductDTO[]>;
        typeFilter(): Promise<string[]>;
        subTypeFilter(type: string): Promise<string[]>;
        productFilter(name: string): Promise<string[]>;
        getAverageSevenDaysByName(name: string): Promise<number>;
        getAllInfo(productId: string): Promise<ProductDTO>;
    }
