export interface ProductDTO {
  id: string;
  name: string;
  slug: string;
  description: string;
  basePrice: number;
  imageUrl?: string | null;
  categoryId: string;
  isEggless: boolean;
  isAvailable: boolean;
  createdAt: Date | string;
  updatedAt: Date | string;
}
