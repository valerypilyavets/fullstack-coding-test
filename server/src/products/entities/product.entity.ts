import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn
} from 'typeorm';
import {IDeliveryStatus} from "../products.interfaces";
import {ProductType} from "./productType.entity";
import {Customer} from "./customer.entity";

@Entity({
    name: 'products'
})
export class Product {
    @PrimaryGeneratedColumn({
        name: 'id',
        type: 'int'
    })
    id: number;

    @Column({
        name: 'delivery_status',
        type: 'int',
    })
    deliveryStatus: IDeliveryStatus;

    @Column({
        name: 'delivery_address',
        type: 'varchar'
    })
    deliveryAddress: string;

    @Column({
        name: 'estimated_delivery_date',
        type: 'date'
    })
    estimatedDeliveryDate: Date;

    @CreateDateColumn({
        name: 'created_at',
        type: 'timestamp',
        default: "now()",
    })
    createdAt: Date;

    @UpdateDateColumn({
        name: 'updated_at',
        type: 'timestamp',
        default: "now()",
    })
    updatedAt: Date;

    @ManyToOne(() => ProductType, (productType) => productType.products)
    @JoinColumn({
        name: 'product_type_id'
    })
    productType: ProductType;

    @ManyToOne(() => Customer, (customer) => customer.products)
    @JoinColumn({
        name: 'customer_id'
    })
    customer: Customer;
}