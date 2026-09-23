# Backend Architecture

## Technology

- **Runtime**: Node.js
- **Language**: TypeScript
- **Framework**: Express.js
- **Validation**: Zod (via `@cake-spark/shared`)
- **ORM**: Prisma

## Layered Modular Architecture

```text
src/
├── config/               # App configuration, database connection, environment schema
├── modules/              # Modular domain features (controller, service, repository)
│   ├── auth/
│   ├── users/
│   ├── products/
│   ├── categories/
│   ├── cart/
│   ├── orders/
│   ├── payments/
│   ├── coupons/
│   ├── reviews/
│   ├── custom-cakes/
│   ├── gallery/
│   └── notifications/
├── middleware/           # Cross-cutting concerns (auth, admin, error, rate-limit)
├── integrations/         # Third-party adapters (Razorpay, Cloudinary, Email, WhatsApp)
├── routes/               # Central router mounting all module endpoints
├── shared/               # Internal backend utilities and errors
├── app.ts                # Express application configuration
└── server.ts             # HTTP server entry point
```

## Architectural Principles

- **Separation of Concerns**: Controllers handle HTTP transport; Services execute domain business logic; Repositories/Prisma handle data access.
- **Request Validation**: Incoming requests are validated against shared Zod schemas before hitting business logic.
- **Uniform Error Handling**: Global error handling middleware transforms exceptions into standardized JSON responses.
