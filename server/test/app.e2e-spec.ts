import {Test, TestingModule} from '@nestjs/testing';
import {INestApplication} from '@nestjs/common';
import * as request from 'supertest';
import {ProductsModule} from "../src/products/products.module";
import {getRepositoryToken, TypeOrmModule} from "@nestjs/typeorm";
import {Product} from "../src/products/entities/product.entity";
import {ProductsService} from "../src/products/products.service";
import * as ormConfig from "../src/config/postgres.config";

describe('Products Controller (e2e)', () => {
    let app: INestApplication;

    beforeAll(async () => {
        const ProductsRepositoryProvider = {
            provide: getRepositoryToken(Product),
            useValue: {
                find: jest.fn(),
                findOne: jest.fn(),
                update: jest.fn(),
            }
        }

        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [
                TypeOrmModule.forRoot(ormConfig),
                ProductsModule
            ],
            providers: [
                ProductsService,
                ProductsRepositoryProvider
            ],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    it('/api/products (GET)', async () => {
        const response = await request(app.getHttpServer())
            .get('/api/products')
        expect(response.status).toEqual(200);
        expect(response.body).toBeInstanceOf(Array);
        expect(response.body[0]).toBeInstanceOf(Object);
    });

    it('/api/products/1 (GET)', async () => {
        const response = await request(app.getHttpServer())
            .get('/api/products/1')
        expect(response.status).toEqual(200);
        expect(response.body).toBeInstanceOf(Object);
    });

    it('/api/products/1 (PATCH)', async () => {
        const response = await request(app.getHttpServer())
            .patch('/api/products/1').send({deliveryStatus: 0})
        expect(response.status).toEqual(200);
        expect(response.body).toBeInstanceOf(Object);
    });

    afterAll(async () => {
        await app.close();
    });
});
