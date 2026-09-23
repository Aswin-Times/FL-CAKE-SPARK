import { Request, Response, NextFunction } from "express";

export function errorMiddleware(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const status = err.statusCode || err.status || 500;
  const message = err.message || "Internal Server Error";

  console.error(`[Error] ${req.method} ${req.url} - ${message}`);

  res.status(status).json({
    success: false,
    error: message,
    ...(process.env.NODE_ENV === "development" ? { stack: err.stack } : {}),
  });
}
