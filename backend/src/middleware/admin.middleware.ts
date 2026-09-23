import { Response, NextFunction } from "express";
import { AuthenticatedRequest } from "./auth.middleware";

export function adminMiddleware(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
) {
  // Phase 0 placeholder: role check to be implemented in auth phase
  next();
}
