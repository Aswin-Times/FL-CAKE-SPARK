# API Specification: Webhooks

## Scope

Third-party asynchronous webhooks received by the backend.

## Endpoints

### 1. Razorpay Webhook

- **Method**: `POST`
- **Route**: `/api/webhooks/razorpay`
- **Headers**: `X-Razorpay-Signature: <signature>`
- **Behavior**: Validates signature using webhook secret and updates order payment status asynchronously.
