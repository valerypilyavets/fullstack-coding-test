import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { IDeliveryStatus } from "../products.interfaces";

export class UpdateProductDto extends PartialType(CreateProductDto) {
    deliveryStatus: IDeliveryStatus;
}
