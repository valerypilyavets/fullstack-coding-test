import {Test, TestingModule} from '@nestjs/testing';
import {ProductsService} from './products.service';
import {getRepositoryToken, TypeOrmModule} from "@nestjs/typeorm";
import {Product} from "./entities/product.entity";
import {Repository, UpdateResult} from "typeorm";
import {UpdateProductDto} from "./dto/update-product.dto";

describe('ProductsService', () => {
    let productsService: ProductsService;
    let productsRepository;

    const productMock = new Product();
    const productsMock = [productMock];
    const updateProductDtoMock = new UpdateProductDto();
    const updateResultMock = new UpdateResult()

    beforeEach(async () => {
        const ProductsRepositoryProvider = {
            provide: getRepositoryToken(Product),
            useValue: {
                find: jest.fn(),
                findOne: jest.fn(),
                update: jest.fn(),
            }
        }

        const module: TestingModule = await Test.createTestingModule({
            providers: [
                ProductsService,
                ProductsRepositoryProvider
            ],
        }).compile();

        productsService = module.get<ProductsService>(ProductsService);
        productsRepository = module.get<Repository<Product>>(getRepositoryToken(Product));
    });

    describe('findAll() method', () => {
        it('returns the data', async () => {
            expect.assertions(1);
            productsRepository.find.mockResolvedValue(productsMock);
            expect(await productsService.findAll()).toEqual(productsMock);
        });
    });
    describe('findOne() method', () => {
        it('returns the data', async () => {
            expect.assertions(1);
            productsRepository.findOne.mockResolvedValue(productMock);
            expect(await productsService.findOne(1)).toEqual(productMock);
        });
    });
    describe('update() method', () => {
        it('returns the data', async () => {
            expect.assertions(1);
            productsRepository.update.mockResolvedValue(updateResultMock);
            productsRepository.findOne.mockResolvedValue(productMock);
            expect(await productsService.update(1, updateProductDtoMock)).toEqual(productMock);
        });
    });
});
