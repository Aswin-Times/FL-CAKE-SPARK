# API Specification: Payments

## Scope

Payment gateway interactions and order checkout fulfillment.

## Endpoints

### 1. Initialize Payment Order

- **Method**: `POST`
- **Route**: `/api/payments/create-order`
- **Body**: `{ "orderId": "string" }`
- **Status**: `200 OK`

### 2. Verify Payment Signature

- **Method**: `POST`
- **Route**: `/api/payments/verify`
- **Body Schema**: `verifyPaymentSchema` (from `@cake-spark/shared`)
- **Status**: `200 OK`
