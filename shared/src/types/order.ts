import { OrderStatus } from "../constants/order-status";
import { DeliveryStatus } from "../constants/delivery-status";

export interface OrderItemDTO {
  id: string;
  productId: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  cakeMessage?: string;
  weightInKg?: number;
}

export interface OrderDTO {
  id: string;
  userId: string;
  status: OrderStatus;
  deliveryStatus: DeliveryStatus;
  totalAmount: number;
  deliveryAddress: string;
  deliveryDate: Date | string;
  items: OrderItemDTO[];
  createdAt: Date | string;
  updatedAt: Date | string;
}
