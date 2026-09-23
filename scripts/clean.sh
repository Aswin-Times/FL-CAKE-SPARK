#!/usr/bin/env bash
set -e

echo "Cleaning build artifacts, caches, and dependency directories..."
pnpm clean || true
find . -name "node_modules" -type d -prune -exec rm -rf '{}' + 2>/dev/null || true
find . -name "dist" -type d -prune -exec rm -rf '{}' + 2>/dev/null || true
find . -name ".next" -type d -prune -exec rm -rf '{}' + 2>/dev/null || true
echo "Clean complete."
