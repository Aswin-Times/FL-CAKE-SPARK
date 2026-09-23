# System Architecture

## Overview

CAKE SPARK is designed as a modular, full-stack monorepo structured with `pnpm workspaces`. It decouples the client user interface, business logic API, database layer, and contract definitions.

## Monorepo Packages

```mermaid
graph TD
    Client[Next.js App Router: frontend] -->|HTTP / JSON| API[Express REST API: backend]
    Shared[@cake-spark/shared] -.->|Types & Validation Schemas| Client
    Shared -.->|Types & Validation Schemas| API
    API -->|Prisma ORM Client| DB[(PostgreSQL Database)]
```

### Components

1. **Frontend (`frontend`)**: Next.js App Router application delivering customer-facing storefronts, custom cake customization interfaces, user account management, and admin workflows.
2. **Backend (`backend`)**: Express.js REST API delivering authentication, order processing, inventory, checkout, payment webhooks, and third-party integrations.
3. **Database (`database`)**: Prisma ORM schema, migration history, and modular seed scripts managing PostgreSQL.
4. **Shared (`shared`)**: Single source of truth containing TypeScript types, Zod schemas, and system constants used by both frontend and backend.
