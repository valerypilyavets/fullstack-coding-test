import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany} from 'typeorm';
import {Product} from "./product.entity";

@Entity({
    name: 'customers'
})
export class Customer {
    @PrimaryGeneratedColumn({
        name: 'id',
        type: 'int'
    })
    id: number;

    @Column({
        name: 'name',
        type: 'varchar'
    })
    name: string;

    @Column({
        name: 'contact_number',
        type: 'varchar'
    })
    contactNumber: string;

    @CreateDateColumn({
        name: 'created_at',
        type: 'timestamp',
        default: "now()",
    })
    createdAt: Date;

    @UpdateDateColumn({
        name: 'updated_at',
        type: 'timestamp',
    })
    updatedAt: Date;

    @OneToMany(() => Product, (product) => product.productType)
    products: Product[];
}