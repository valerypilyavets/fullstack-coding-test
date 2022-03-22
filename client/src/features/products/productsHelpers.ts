import {IDeliveryStatus} from "./Products.interfaces";

export function getReadableStatus(status: IDeliveryStatus) {
    switch (status) {
        case IDeliveryStatus.CANCELLED:
            return 'cancelled';
        case IDeliveryStatus.ORDERED:
            return 'ordered';
        case IDeliveryStatus.PENDING:
            return 'pending';
        case IDeliveryStatus.SHIPPED:
            return 'shipped';
        default:
            return 'unknown';
    }
}