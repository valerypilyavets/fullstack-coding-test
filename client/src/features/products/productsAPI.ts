import axios from "axios";
import {IUpdateProductStatusParams} from "./Products.interfaces";

const api = axios.create({
    baseURL: '/api',
});

export async function fetchProducts() {
    return await api.get('/products/');
}

export async function fetchProduct(id: number) {
    return await api.get('/products/' + id);
}

export async function updateDeliveryStatus(params: IUpdateProductStatusParams) {
    return await api.patch('/products/' + params.id, {
        "deliveryStatus": params.status
    });
}