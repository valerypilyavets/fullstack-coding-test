import { Factory, Seeder } from "typeorm-seeding";
import { Connection } from "typeorm";

import { ProductType } from "../../../products/entities/productType.entity";
import { Customer} from "../../../products/entities/customer.entity";
import { Product} from "../../../products/entities/product.entity";

export default class InitialDatabaseSeed implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<void> {
        const productTypes = await factory(ProductType)().createMany(10);
        const customers = await factory(Customer)().createMany(30);

        await factory(Product)()
            .map(async (product) => {
                product.productType = productTypes[Math.floor(Math.random() * productTypes.length)];
                product.customer = customers[Math.floor(Math.random() * customers.length)];
                return product;
            })
            .createMany(100);
    }
}