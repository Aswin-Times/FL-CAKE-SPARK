# API Specification: Authentication

## Scope

Defines planned authentication endpoints to be implemented in subsequent phases.

## Endpoints

### 1. Register User

- **Method**: `POST`
- **Route**: `/api/auth/register`
- **Body Schema**: `registerSchema` (from `@cake-spark/shared`)
- **Status**: `201 Created`

### 2. Login User

- **Method**: `POST`
- **Route**: `/api/auth/login`
- **Body Schema**: `loginSchema` (from `@cake-spark/shared`)
- **Status**: `200 OK`

### 3. Current User Profile

- **Method**: `GET`
- **Route**: `/api/auth/me`
- **Headers**: `Authorization: Bearer <token>`
- **Status**: `200 OK`

### 4. Logout

- **Method**: `POST`
- **Route**: `/api/auth/logout`
- **Status**: `200 OK`
