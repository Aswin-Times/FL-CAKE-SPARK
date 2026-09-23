#!/usr/bin/env bash
set -e

echo "=== CAKE SPARK Deployment Script ==="
echo "Pulling latest code and building..."

# Pull latest changes (if running in target environment)
git pull origin main

# Install dependencies
pnpm install --frozen-lockfile

# Generate Prisma Client & Migrate DB
pnpm db:generate
pnpm db:migrate

# Build packages
pnpm build

echo "Deployment preparation completed. Restarting application services..."
# Service restart commands (systemd / pm2) will be defined per host
