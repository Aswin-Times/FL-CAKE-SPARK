# @cake-spark/backend

Express REST API for CAKE SPARK custom-cake ordering and e-commerce platform.

## Architecture

- **Framework**: Express.js
- **Runtime**: Node.js + TypeScript
- **Validation**: Zod (via `@cake-spark/shared`)
- **Database**: PostgreSQL via Prisma ORM (`@cake-spark/database`)

## Available Scripts

```bash
# Run server in watch mode with tsx
pnpm dev

# Build TypeScript to dist
pnpm build

# Start production server
pnpm start

# Type check / Lint
pnpm lint

# Run tests
pnpm test
```

## Health Check

- `GET /api/health`
  Response:

```json
{
  "success": true,
  "message": "CAKE SPARK API is running"
}
```
