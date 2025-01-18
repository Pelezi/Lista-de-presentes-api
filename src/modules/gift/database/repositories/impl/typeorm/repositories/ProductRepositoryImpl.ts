import { Product } from "../entities/gift.entity";

import {
    ProductDTO,
    CreateProductDTO,
    UpdateProductDTO
} from "../../../../../dtos/ProductDTO";

import { BaseRepositoryImpl } from '../../../../../../base/BaseRepositoryImpl';
import { FindOptionsWhere } from "typeorm";
import { subDays } from "date-fns";

export class ProductRepositoryImpl
    extends BaseRepositoryImpl<ProductDTO, CreateProductDTO, UpdateProductDTO> {

    constructor() {
        super('id', Product);
    }

    async getByUser(userId: string): Promise<ProductDTO[]> {
        const products = await this.typeormRepository.find({
            where: {
                userId: userId,
            } as FindOptionsWhere<ProductDTO>
        });

        if (!products) {
            throw new Error(`Register not found!`);
        }

        return products;
    }

    async getAllInfo(productId: string): Promise<ProductDTO> {
        const product = await this.typeormRepository.createQueryBuilder('product')
            .leftJoin('product.user', 'user')
            .leftJoin('product.prices', 'price')
            .leftJoin('price.type', 'type')
            .leftJoin('user.address', 'address')
            .leftJoin('user.phone', 'phone')
            .leftJoin('user.email', 'email')
            .select([
                'product.id',
                'product.name',
                'product.description',
                'product.picture',
                'user.name',
                'address.street',
                'address.number',
                'address.district',
                'address.postalCode',
                'phone.phone',
                'email.email',
                'price.value',
                'price.measure',
                'price.currency',
                'type.name'
            ])
            .where('product.id = :productId', { productId })
            .getOne();

        if (!product) {
            throw new Error(`Register not found!`);
        }

        return product;
    }

    async getAverageSevenDaysByName(name: string): Promise<number> {
        const dataLimite = subDays(new Date(), 7);

        const products = await this.typeormRepository.createQueryBuilder('product')
            .select('product.id')
            .where('product.name = :name', { name })
            .andWhere('product.createdAt >= :dataLimite', { dataLimite })
            .getMany();
        const arrayIds = products.map((item) => item.id);

        const valores = await this.typeormRepository.createQueryBuilder('product')
            .innerJoin('product.prices', 'price')
            .select(['price.value'])
            .where('price.productId IN (:...ids)', { ids: arrayIds })
            .getRawMany();


        const precos = valores.map((item) => item.price_value);
        console.log(precos);
        const soma = precos.reduce((total, precos) => total + precos, 0);
        const media = soma / precos.length;

        return media;
    }

    async typeFilter(): Promise<string[]> {
        const Types = await this.typeormRepository.createQueryBuilder('product')
            .select('product.type')
            .getMany();
        
        const arrayTypes = new Set(Types.map((item) => item.type));
    
        return Array.from(arrayTypes);
    }

    async subTypeFilter(type: string): Promise<string[]> {
        const subTypes = await this.typeormRepository.createQueryBuilder('product')
            .select('product.subType')
            .where('product.type = :type', { type })
            .getMany();
        
        const arraySubTypes = new Set(subTypes.map((item) => item.subType));
    
        return Array.from(arraySubTypes);
    }

    async productFilter(name: string): Promise<string[]> {
        const products = await this.typeormRepository.createQueryBuilder('product')
            .select(['product.name','product.id'])
            .where('product.subType = :name', { name })
            .getMany();
            console.log(products)

        
        const arrayProducts = [];

        products.forEach((item) => {
            arrayProducts.push(item);
        })

        return arrayProducts;
    }
}