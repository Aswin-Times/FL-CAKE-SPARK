import { z } from "zod";

export const createProductSchema = z.object({
  name: z.string().min(2, "Product name is required"),
  slug: z.string().min(2, "Slug is required"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  basePrice: z.number().positive("Price must be greater than zero"),
  categoryId: z.string().min(1, "Category is required"),
  imageUrl: z.string().url().optional(),
  isEggless: z.boolean().default(false),
  isAvailable: z.boolean().default(true),
});

export type CreateProductInput = z.infer<typeof createProductSchema>;
