# CAKE SPARK 🎂✨

> Production-ready full-stack web application for artisanal cake e-commerce and custom-cake ordering.

---

## 1. Overview

**CAKE SPARK** is a modern e-commerce platform and bespoke custom-cake ordering system designed for artisan bakeries. The platform enables customers to order handcrafted celebration cakes, customize multi-tiered cakes with specific flavors, fillings, and reference designs, and track order fulfillment in real time.

---

## 2. Architecture

CAKE SPARK is organized as a high-performance monorepo utilizing **pnpm workspaces**, ensuring strict separation of concerns:

```
[ Frontend: Next.js App Router ]      [ Backend: Express.js REST API ]
                 \                          /
                  \                        /
             [ Shared Contracts: @cake-spark/shared ]
                           |
            [ Database: Prisma ORM (PostgreSQL) ]
```

- **Frontend (`frontend`)**: Next.js App Router, Tailwind CSS, TypeScript, Server & Client Components.
- **Backend (`backend`)**: Node.js, Express.js REST API, modular layered architecture, Zod validation.
- **Database (`database`)**: PostgreSQL managed through Prisma ORM, migrations, and modular seeders.
- **Shared (`shared`)**: Single source of truth for DTO interfaces, Zod validation schemas, and constants.

---

## 3. Technology Stack

| Layer                  | Technology                                |
| ---------------------- | ----------------------------------------- |
| **Package Manager**    | `pnpm` (Workspace Monorepo)               |
| **Frontend Framework** | Next.js (App Router), React, TypeScript   |
| **Styling**            | Tailwind CSS                              |
| **Backend Framework**  | Node.js, Express.js, TypeScript           |
| **Validation**         | Zod (centralized in `@cake-spark/shared`) |
| **Database**           | PostgreSQL, Prisma ORM                    |
| **Payment Gateway**    | Razorpay (adapter skeleton)               |
| **Asset Storage**      | Cloudinary (adapter skeleton)             |
| **Code Quality**       | ESLint, Prettier, TypeScript Strict Mode  |

---

## 4. Repository Structure

```text
cake-spark/
│
├── frontend/             # Next.js App Router frontend application
├── backend/              # Node.js + Express REST API
├── database/             # Prisma schema, migrations, and seed scripts
├── shared/               # Shared TypeScript types, Zod schemas, constants
├── docs/                 # Architecture, API, DB, Design, and Business documentation
├── infrastructure/       # Nginx reverse proxy and deployment scripts
├── config/               # Shared ESLint, Prettier, TypeScript, and Env configurations
├── scripts/              # Shell scripts for setup, dev, build, and clean
├── .github/              # GitHub Actions CI workflow
│
├── .gitignore            # Git exclusion rules
├── .editorconfig         # Code formatting standards
├── .env.example          # Environment variables template
├── package.json          # Root scripts and workspace dependencies
├── pnpm-workspace.yaml   # pnpm workspace definition
├── README.md             # Project documentation
└── LICENSE               # MIT License
```

---

## 5. Prerequisites

- **Node.js**: `>= 20.x` (Recommended: Node 22+)
- **pnpm**: `>= 9.x`
- **PostgreSQL**: `>= 15.x`

---

## 6. Installation

Clone the repository and install all workspace dependencies:

```bash
git clone https://github.com/Aswin-Times/FL-CAKE-SPARK.git cake-spark
cd cake-spark
pnpm install
```

---

## 7. Environment Setup

Copy the environment template to create your `.env` file:

```bash
cp .env.example .env
```

Configure `DATABASE_URL` with your local PostgreSQL credentials:

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/cake_spark_dev?schema=public"
```

---

## 8. Development Commands

Run frontend and backend concurrently:

```bash
pnpm dev
```
- **Frontend Storefront**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **Health Check Endpoint**:http://localhost:5000/api/health

### Individual Package Commands

```bash
# Frontend only
pnpm dev:frontend

# Backend only
pnpm dev:backend

# Build all packages
pnpm build

# Lint code across workspace
pnpm lint

# Format code with Prettier
pnpm format
pnpm format:check

# Run test suites
pnpm test
```

---

## 9. Database Setup

```bash
# Generate Prisma Client
pnpm db:generate

# Apply database migrations
pnpm db:migrate

# Seed database with baseline fixtures
pnpm db:seed
```

---

## 10. Testing

```bash
# Run unit and integration tests across workspace
pnpm test
```

---

## 11. Code Conventions

- **Path Aliases**: Always use `@/*` for internal package imports (e.g. `@/components/ui/button`, `@/config/env`).
- **Single Source of Truth**: Never duplicate DTOs or Zod validation schemas. Define them in `@cake-spark/shared` and import them in `frontend` and `backend`.
- **TypeScript Strictness**: Strict mode is enabled across all workspaces (`strict: true`). No implicit `any`.
- **Formatting**: Run `pnpm format` before opening pull requests.

---

## 12. Contribution Guidelines

1. Create a feature branch: `git checkout -b feat/your-feature-name`.
2. Make targeted changes conforming to the directory architecture.
3. Verify builds and lints pass: `pnpm build && pnpm lint`.
4. Commit using conventional commit format: `feat:`, `fix:`, `refactor:`, `docs:`.
5. Push to remote and open a Pull Request.

---

## 13. Development Phases

- **Phase 0**: Project Foundation, Monorepo Skeleton, Architecture & Config _(Current)_
- **Phase 1**: Database Schema, Migrations & Core Seeders
- **Phase 2**: Authentication & User Management (JWT, Roles)
- **Phase 3**: Product Catalog & Category Architecture
- **Phase 4**: Custom Cake Builder & Ordering Workflow
- **Phase 5**: Shopping Cart, Checkout & Razorpay Integration
- **Phase 6**: Admin Dashboard & Store Operations
- **Phase 7**: Customer Reviews, Loyalty Coupons & Notification Engine
- **Phase 8**: End-to-End Testing, Security Hardening & Production Deployment
