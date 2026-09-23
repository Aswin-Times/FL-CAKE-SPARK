#!/usr/bin/env bash
set -e

echo "Running database migrations..."
pnpm db:migrate
echo "Database migration complete."
