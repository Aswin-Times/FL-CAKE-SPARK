# Staging Deployment

## Environment Details

- Isolated PostgreSQL staging database.
- Integrated with Razorpay sandbox keys and test notification webhooks.

## Staging Deployment Flow

1. Automated CI on push to `develop` branch builds and tests the packages.
2. Deploy script executes `infrastructure/scripts/deploy.sh` on the staging host.
3. Database migrations applied via `pnpm db:migrate`.
4. Smoke tests confirm `/api/health` returns `200 OK`.
