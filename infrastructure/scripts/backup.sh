#!/usr/bin/env bash
set -e

TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
BACKUP_DIR="${BACKUP_DIR:-./backups}"
mkdir -p "$BACKUP_DIR"

echo "Creating PostgreSQL backup at ${BACKUP_DIR}/cakespark_backup_${TIMESTAMP}.sql.gz..."
# pg_dump "${DATABASE_URL}" | gzip > "${BACKUP_DIR}/cakespark_backup_${TIMESTAMP}.sql.gz"
echo "Backup command template prepared."
