import { PaymentStatus } from "../constants/payment-status";

export interface PaymentDTO {
  id: string;
  orderId: string;
  amount: number;
  status: PaymentStatus;
  provider: "RAZORPAY";
  transactionId?: string | null;
  createdAt: Date | string;
}
