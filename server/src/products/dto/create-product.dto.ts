import { IDeliveryStatus } from "../products.interfaces";

export class CreateProductDto {
    productTypeId: number;
    customerId: number;
    deliveryStatus: IDeliveryStatus;
    deliveryAddress: string;
    estimatedDeliveryDate: Date;
}
