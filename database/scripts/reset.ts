import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function reset() {
  console.info("Resetting database tables...");
  // Safe truncation / cleanup for development
  await prisma.$executeRawUnsafe('TRUNCATE TABLE "users" CASCADE;');
  console.info("Database reset complete.");
}

reset()
  .catch((e) => {
    console.error("Error during reset:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
