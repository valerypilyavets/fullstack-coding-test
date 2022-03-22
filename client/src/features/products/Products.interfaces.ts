export enum FetchStatus {
    INITIAL,
    LOADING,
    READY,
    ERROR
}

export interface IFetchError {
    text: string
}

export enum IDeliveryStatus {
    PENDING,
    ORDERED,
    SHIPPED,
    CANCELLED
}

export interface ICustomer {
    id: number,
    name: string,
    contactNumber: string,
    createdAt: Date,
    updatedAt: Date
}

export interface IProductType {
    id: number,
    name: string,
    createdAt: Date,
    updatedAt: Date
}

export interface IProduct {
    id: number;
    deliveryStatus: IDeliveryStatus,
    deliveryAddress: string,
    estimatedDeliveryDate: Date,
    createdAt: Date,
    updatedAt: Date,
    customer?: ICustomer,
    productType?: IProductType

}

export interface IUpdateProductStatusParams {
    id: number,
    status: IDeliveryStatus
}

export interface IProductsState {
    products: IProduct[] | undefined,
    status: FetchStatus,
    error: IFetchError | undefined
}

export interface IProductState {
    product: IProduct | undefined,
    status: FetchStatus,
    error: IFetchError | undefined
}

export type StatusChangeCallback = (status: IDeliveryStatus) => void;