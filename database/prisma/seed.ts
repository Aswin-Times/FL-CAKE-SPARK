import { PrismaClient } from "@prisma/client";
import { seedUsers } from "../seeds/users.seed";
import { seedCategories } from "../seeds/categories.seed";
import { seedProducts } from "../seeds/products.seed";
import { seedCoupons } from "../seeds/coupons.seed";

const prisma = new PrismaClient();

async function main() {
  console.info("Starting database seeding...");
  await seedUsers(prisma);
  await seedCategories(prisma);
  await seedProducts(prisma);
  await seedCoupons(prisma);
  console.info("Database seeding completed successfully.");
}

main()
  .catch((e) => {
    console.error("Error during database seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
