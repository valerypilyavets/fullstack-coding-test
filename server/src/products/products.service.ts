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
        return this.productsRepository.findOne({
            relations: ['customer', 'productType']
        })
    }

    update(id: number, updateProductDto: UpdateProductDto) {
        return this.productsRepository.update(id, updateProductDto);
    }
}
