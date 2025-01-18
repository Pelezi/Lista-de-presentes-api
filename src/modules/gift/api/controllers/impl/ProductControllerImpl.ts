import { injectable, inject } from 'tsyringe';
import { Request, Response } from 'express';

import { BaseControllerImpl } from '../../../../base/BaseControllerImpl';
import { ProductService } from '../../../business/services/ProductService';

import {
    CreateProductDTO,
    UpdateProductDTO,
    ProductDTO
} from '../../../dtos/ProductDTO';


@injectable()
export class ProductControllerImpl
    extends BaseControllerImpl<ProductDTO, CreateProductDTO, UpdateProductDTO> {

    constructor(
        @inject('ProductService')
        private productService: ProductService
    ) {
        super(productService);
    }

    public async getByUser(req: Request, res: Response): Promise<Response> {
        const { userId } = req.params;
        const products = await this.productService.getByUser(userId);
        return res.json(products);
    }

    public async getAllInfo(req: Request, res: Response): Promise<Response> {
        const { productId } = req.params;
        const product = await this.productService.getAllInfo(productId);
        return res.json(product);
    }

    public async getAverageSevenDaysByName(req: Request, res: Response): Promise<Response> {
        const name = req.params.name;
        const media = await this.productService.getAverageSevenDaysByName(name);

        return res.json({ media: media.toString() });
    }

    public async typeFilter(req: Request, res: Response): Promise<Response> {
        const type = req.params.type;
        const arrayTypes = await this.productService.typeFilter();
    
        return res.json(arrayTypes);
    }

    public async subTypeFilter(req: Request, res: Response): Promise<Response> {
        const type = req.query.type as string;
        const arraysubTypes = await this.productService.subTypeFilter(type);

        return res.json(arraysubTypes);
    }

    public async productFilter(req: Request, res: Response): Promise<Response> {
        const name = req.query.name as string;
        const arrayProducts = await this.productService.productFilter(name);

        return res.json(arrayProducts);
    }

}
