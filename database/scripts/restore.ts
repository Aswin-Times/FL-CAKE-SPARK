import path from "path";

async function restore() {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    console.error("DATABASE_URL is not set.");
    process.exit(1);
  }
  const fileArg = process.argv[2];
  if (!fileArg) {
    console.warn("Usage: tsx scripts/restore.ts <path-to-sql-file>");
    return;
  }
  console.info(`Restoring database from ${path.resolve(fileArg)}...`);
}

restore();
