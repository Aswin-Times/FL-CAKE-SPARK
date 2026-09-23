import { z } from "zod";

export const verifyPaymentSchema = z.object({
  orderId: z.string().min(1, "Order ID is required"),
  razorpayPaymentId: z.string().min(1, "Razorpay Payment ID is required"),
  razorpayOrderId: z.string().min(1, "Razorpay Order ID is required"),
  razorpaySignature: z.string().min(1, "Razorpay Signature is required"),
});

export type VerifyPaymentInput = z.infer<typeof verifyPaymentSchema>;
