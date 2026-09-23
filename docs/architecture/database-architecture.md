# Database Architecture

## Technology

- **Database Engine**: PostgreSQL
- **ORM & Migrations**: Prisma ORM

## Database Structure & Workflow

```text
database/
├── prisma/
│   ├── schema.prisma     # Declarative relational schema
│   ├── seed.ts           # Master seed execution entry point
│   └── migrations/       # Version-controlled SQL migration history
├── seeds/                # Modular seed definitions
│   ├── users.seed.ts
│   ├── categories.seed.ts
│   ├── products.seed.ts
│   └── coupons.seed.ts
└── scripts/              # Administrative maintenance scripts
    ├── reset.ts
    ├── backup.ts
    └── restore.ts
```

## Migration and Seeding Lifecycle

1. Schema changes are declared in `schema.prisma`.
2. Migrations are tracked via `pnpm db:migrate`.
3. Client types are generated with `pnpm db:generate`.
4. Initial fixtures are loaded with `pnpm db:seed`.
