# API Specification: Orders

## Scope

Endpoints for customer order placement and tracking.

## Endpoints

### 1. Create Order

- **Method**: `POST`
- **Route**: `/api/orders`
- **Body Schema**: `createOrderSchema` (from `@cake-spark/shared`)
- **Status**: `201 Created`

### 2. Get User Orders

- **Method**: `GET`
- **Route**: `/api/orders`
- **Status**: `200 OK`

### 3. Get Order Details

- **Method**: `GET`
- **Route**: `/api/orders/:id`
- **Status**: `200 OK`

### 4. Update Order Status (Admin)

- **Method**: `PATCH`
- **Route**: `/api/orders/:id/status`
- **Status**: `200 OK`
