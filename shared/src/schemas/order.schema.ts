import { z } from "zod";

export const orderItemSchema = z.object({
  productId: z.string().min(1, "Product ID is required"),
  quantity: z.number().int().positive("Quantity must be at least 1"),
  cakeMessage: z
    .string()
    .max(100, "Cake message cannot exceed 100 characters")
    .optional(),
  weightInKg: z.number().positive().optional(),
});

export const createOrderSchema = z.object({
  items: z
    .array(orderItemSchema)
    .min(1, "Order must contain at least one item"),
  deliveryAddress: z.string().min(5, "Delivery address is required"),
  deliveryDate: z.string().or(z.date()),
  contactPhone: z.string().min(10, "Valid contact phone number is required"),
});

export type CreateOrderInput = z.infer<typeof createOrderSchema>;
