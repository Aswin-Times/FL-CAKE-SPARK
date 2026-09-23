# Database Schema Specification

## Scope

Documents the relational entity model planned for CAKE SPARK in subsequent database phases.

## Core Entities

- **User**: Authentication, profile data, roles (`CUSTOMER`, `ADMIN`, `STAFF`).
- **Category**: Hierarchical cake categories (e.g., Birthday, Wedding, Cupcakes).
- **Product**: Cake item attributes, price, weights, dietary labels (eggless, sugar-free), images.
- **Order**: Customer order header, delivery address, timestamps, status.
- **OrderItem**: Line items linked to products or custom cake specifications.
- **CustomCakeRequest**: Custom tier, flavor, filling, message, design reference images.
- **Payment**: Transaction records, Razorpay IDs, payment status.
- **Review**: Customer product reviews and ratings.
- **Coupon**: Discount codes, percentage or fixed discount, usage limits.
