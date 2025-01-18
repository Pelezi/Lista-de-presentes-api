import { BaseService } from '../../../base/BaseService';

import { 
    ProductDTO,  
    CreateProductDTO, 
    UpdateProductDTO 
} from '../../dtos/ProductDTO';

export interface ProductService 
    extends BaseService<ProductDTO, CreateProductDTO, UpdateProductDTO> {
        getByUser(userId: string): Promise<ProductDTO[]>;
        getAllInfo(productId: string): Promise<ProductDTO>;
        getAverageSevenDaysByName(name: string): Promise<number>;
        typeFilter(): Promise<string[]>;
        subTypeFilter(type: string): Promise<string[]>; 
        productFilter(name: string): Promise<string[]>;   
    }
