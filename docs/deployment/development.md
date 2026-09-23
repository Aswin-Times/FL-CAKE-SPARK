# Development Deployment

## Prerequisites

- Node.js >= 20.x
- pnpm >= 9.x
- PostgreSQL instance (local or remote)

## Local Setup

```bash
# 1. Install dependencies
pnpm install

# 2. Setup environment variables
cp .env.example .env

# 3. Generate Prisma client
pnpm db:generate

# 4. Start concurrent development servers
pnpm dev
```

- Frontend starts at: `http://localhost:3000`
- Backend starts at: `http://localhost:5000` (Health check at `http://localhost:5000/api/health`)
