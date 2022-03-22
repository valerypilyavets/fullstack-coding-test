import { define } from "typeorm-seeding";
import { Faker } from "@faker-js/faker";

import { ProductType } from "../../../products/entities/productType.entity";

define(ProductType, (faker: Faker) => {
    const productType = new ProductType();
    productType.name = faker.commerce.product();
    return productType;
});