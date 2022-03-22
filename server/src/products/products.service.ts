import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';

import {UpdateProductDto} from './dto/update-product.dto';
import {Product} from "./entities/product.entity";

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product)
        private productsRepository: Repository<Product>,
    ) {
    }

    findAll(): Promise<Product[]> {
        return this.productsRepository.find();
    }

    findOne(id: number) {
        return this.productsRepository.findOne(id,{
            relations: ['customer', 'productType']
        })
    }

    async update(id: number, updateProductDto: UpdateProductDto) {
        await this.productsRepository.update(id, updateProductDto);
        return this.productsRepository.findOne(id,{
            relations: ['customer', 'productType']
        })
    }
}
