# Production Deployment

## Architecture

- Managed PostgreSQL with automated daily snapshots and connection pooling.
- Backend Express instance behind Nginx reverse proxy with TLS/SSL termination.
- Next.js frontend built in production mode (`pnpm --filter frontend build && pnpm --filter frontend start`).
- Environment secrets injected directly via runtime environment variables (never committed to repository).
