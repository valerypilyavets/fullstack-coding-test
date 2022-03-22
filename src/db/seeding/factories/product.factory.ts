import { define } from "typeorm-seeding";
import { Faker } from "@faker-js/faker";

import { Product } from "../../../products/entities/product.entity";

define(Product, (faker: Faker) => {
    const product = new Product();
    product.deliveryStatus = Math.floor(Math.random() * 4);
    product.deliveryAddress = faker.address.city() + ', ' + faker.address.streetAddress();
    product.deliveryAddress = faker.address.city() + ', ' + faker.address.streetAddress();
    product.estimatedDeliveryDate = faker.date.future(0)
    return product;
});