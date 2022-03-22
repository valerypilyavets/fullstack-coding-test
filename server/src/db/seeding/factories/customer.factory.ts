import { define } from "typeorm-seeding";
import { Faker } from "@faker-js/faker";

import { Customer } from "../../../products/entities/customer.entity";

define(Customer, (faker: Faker) => {
    const customer = new Customer();
    customer.name = faker.name.firstName() + ' ' + faker.name.lastName();
    customer.contactNumber = faker.phone.phoneNumber();
    return customer;
});