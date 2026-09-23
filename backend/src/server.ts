import app from "./app";
import { env } from "./config/env";

const server = app.listen(env.PORT, () => {
  console.info(
    `[Server] CAKE SPARK API server listening on http://localhost:${env.PORT}`,
  );
  console.info(
    `[Server] Health check available at http://localhost:${env.PORT}/api/health`,
  );
});

process.on("SIGTERM", () => {
  console.info("[Server] SIGTERM signal received: closing HTTP server");
  server.close(() => {
    console.info("[Server] HTTP server closed");
  });
});

process.on("SIGINT", () => {
  console.info("[Server] SIGINT signal received: closing HTTP server");
  server.close(() => {
    console.info("[Server] HTTP server closed");
  });
});
