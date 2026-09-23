import { z } from "zod";

export const customCakeInquirySchema = z.object({
  flavor: z.string().min(2, "Flavor is required"),
  tiers: z.number().int().min(1).max(5),
  estimatedWeightKg: z.number().positive(),
  message: z.string().max(100).optional(),
  referenceImageUrl: z.string().url().optional(),
  specialInstructions: z.string().max(500).optional(),
  eventDate: z.string().or(z.date()),
});

export type CustomCakeInquiryInput = z.infer<typeof customCakeInquirySchema>;
