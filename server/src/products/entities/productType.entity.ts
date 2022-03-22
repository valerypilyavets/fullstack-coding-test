import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import {Product} from "./product.entity";

@Entity({
    name: 'product_types'
})
export class ProductType {
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

    @OneToMany(() => Product, (product) => product.productType)
    products: Product[];
}