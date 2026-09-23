#!/usr/bin/env bash
set -e

echo "=== Setting up CAKE SPARK Development Environment ==="

# Check pnpm
if ! command -v pnpm &> /dev/null; then
    echo "Error: pnpm is not installed. Please install pnpm (https://pnpm.io/installation)."
    exit 1
fi

echo "1. Installing monorepo dependencies..."
pnpm install

echo "2. Copying environment template if not present..."
if [ ! -f .env ]; then
    cp .env.example .env
    echo "Created .env from .env.example"
fi

echo "3. Generating Prisma client..."
pnpm db:generate

echo "=== CAKE SPARK setup complete! Run 'pnpm dev' to start development. ==="
