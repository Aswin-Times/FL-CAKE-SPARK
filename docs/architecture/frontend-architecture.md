# Frontend Architecture

## Technology

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Component Pattern**: Feature-driven architecture

## Directory Breakdown

```text
src/
├── app/                  # App Router route definitions and layouts
│   ├── (storefront)/     # Customer shopping experience
│   ├── (auth)/           # Login, register, forgot password
│   ├── account/          # Customer profile & orders
│   └── admin/            # Administrative management dashboard
├── components/           # Generic atomic design UI elements (ui, layout, navigation, feedback)
├── features/             # Domain-specific components, hooks, and services (cart, products, orders, etc.)
├── hooks/                # Global React hooks
├── lib/                  # Utilities, API client fetchers, formatters
├── store/                # Client-side state stores
└── types/                # Frontend-specific types
```

## Architectural Principles

- **Route Isolation**: Route groups `(storefront)` and `(auth)` separate layout hierarchies cleanly.
- **Contract Sharing**: All entity types and form validation schemas are imported from `@cake-spark/shared`.
- **Server and Client Boundaries**: Clear separation between Server Components (data fetching) and Client Components (interactive controls).
