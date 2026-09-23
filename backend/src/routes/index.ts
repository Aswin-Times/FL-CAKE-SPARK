import { Router, Request, Response, IRouter } from "express";

const router: Router = Router();

// Health check endpoint
router.get("/health", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "CAKE SPARK API is running",
  });
});

export default router;
