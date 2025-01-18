import { injectable, inject } from 'tsyringe';

import { BaseServiceImpl } from '../../../../base/BaseServiceImpl';

import {
    ProductDTO,
    CreateProductDTO,
    UpdateProductDTO
} from '../../../dtos/ProductDTO';

import { ProductRepository } from '../../../database/repositories/ProductRepository';
import { ProductService } from '../ProductService';


@injectable()
export class ProductServiceImpl
    extends BaseServiceImpl<ProductDTO, CreateProductDTO, UpdateProductDTO> 
    implements ProductService{
        
        constructor(
            @inject('ProductRepository')
            private productRepository: ProductRepository
            ) {
                super(productRepository);
            }

    async getByUser(userId: string): Promise<ProductDTO[]> {
        return this.productRepository.getByUser(userId);
    }


    async getAllInfo(productId: string): Promise<ProductDTO> {
        return this.productRepository.getAllInfo(productId);
    }

    async getAverageSevenDaysByName(name: string): Promise<number> {
        return this.productRepository.getAverageSevenDaysByName(name);       
    }

    async typeFilter(): Promise<string[]> {
        return this.productRepository.typeFilter();
    }
    
    async subTypeFilter(type: string): Promise<string[]> {
        return this.productRepository.subTypeFilter(type);
    }

    async productFilter(name: string): Promise<string[]> {
        return this.productRepository.productFilter(name);
    }
}
