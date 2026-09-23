import { Request, Response, NextFunction } from "express";

export function rateLimitMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  // Phase 0 placeholder: rate limiting mechanism
  next();
}
