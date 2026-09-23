import dotenv from "dotenv";
import path from "path";
import { z } from "zod";

// Load root or local .env
dotenv.config({ path: path.resolve(__dirname, "../../../.env") });
dotenv.config();

const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "staging", "production", "test"])
    .default("development"),
  PORT: z
    .string()
    .transform((val) => parseInt(val, 10))
    .default("5000"),
  DATABASE_URL: z.string().optional(),
  CORS_ORIGIN: z.string().default("http://localhost:3000"),
  RAZORPAY_KEY_ID: z.string().optional(),
  RAZORPAY_KEY_SECRET: z.string().optional(),
  CLOUDINARY_CLOUD_NAME: z.string().optional(),
  CLOUDINARY_API_KEY: z.string().optional(),
  CLOUDINARY_API_SECRET: z.string().optional(),
  EMAIL_HOST: z.string().optional(),
  EMAIL_PORT: z.string().optional(),
  EMAIL_USER: z.string().optional(),
  EMAIL_PASSWORD: z.string().optional(),
  WHATSAPP_API_URL: z.string().optional(),
  WHATSAPP_ACCESS_TOKEN: z.string().optional(),
});

export const env = envSchema.parse(process.env);
