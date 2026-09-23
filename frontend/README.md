# @cake-spark/frontend

Next.js App Router storefront and admin application for CAKE SPARK.

## Technology Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Contract / Types**: `@cake-spark/shared`

## Directory Structure

- `public/`: Static assets (branding, cakes, categories, gallery, hero, offers)
- `src/app/`: Next.js App Router pages and layouts
- `src/components/`: Atomic UI components (ui, layout, navigation, feedback)
- `src/features/`: Feature modules (products, cart, checkout, custom-cakes, orders, etc.)
- `src/hooks/`: Custom React hooks
- `src/lib/`: API client and utility helpers
- `src/store/`: Client-side state stores
- `src/config/`: Frontend configuration

## Commands

```bash
# Run Next.js development server on port 3000
pnpm dev

# Build production bundle
pnpm build

# Start production server
pnpm start

# Run linter
pnpm lint
```
