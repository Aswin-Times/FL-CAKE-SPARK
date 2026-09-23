# API Specification: Products

## Scope

Endpoints for browsing, filtering, and managing cake items.

## Endpoints

### 1. List Products

- **Method**: `GET`
- **Route**: `/api/products`
- **Query Params**: `page`, `limit`, `category`, `search`, `sort`
- **Status**: `200 OK`

### 2. Get Product By Slug/ID

- **Method**: `GET`
- **Route**: `/api/products/:id`
- **Status**: `200 OK`

### 3. Create Product (Admin)

- **Method**: `POST`
- **Route**: `/api/products`
- **Body Schema**: `createProductSchema` (from `@cake-spark/shared`)
- **Status**: `201 Created`

### 4. Update Product (Admin)

- **Method**: `PUT` / `PATCH`
- **Route**: `/api/products/:id`
- **Status**: `200 OK`
