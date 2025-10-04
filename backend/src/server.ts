import http, { Server } from "http";
import app from "./app";
import { prisma } from "./config/db";
import { env } from "./config/env";
import { seedAdmin } from "./utils/seedAdmin";

let server: Server | null = null;

async function connectToDB() {
  try {
    await prisma.$connect();
    console.log("***Database Connected!");
  } catch (err) {
    console.log("*** DB connection failed!");
    process.exit(1);
  }
}

async function startServer() {
  try {
    await connectToDB();

    server = http.createServer(app);
    server.listen(env.PORT, () => {
      console.log("Server is Running on port:", env.PORT);
    });

    handleProcessEvents();
  } catch (err) {
    console.log("Error during server setup:", err);
    process.exit(1);
  }
}

async function gracefulShutdown(signal: string) {
  console.warn(`🔄 Received ${signal}, shutting down gracefully...`);
  if (server) {
    server.close(async () => {
      console.log("HTTP server closed.");

      try {
        console.log("Server shutdown complete.");
      } catch (error) {
        console.error("Error during shutdown:", error);
      }
      process.exit(0);
    });
  } else {
    process.exit(0);
  }
}

//handle system signals and unepected errors.
function handleProcessEvents() {
  process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));
  process.on("SIGINT", () => gracefulShutdown("SIGINT"));
  process.on("uncaughtException", (error) => {
    console.error("💥 Uncaught Exception:", error);
    gracefulShutdown("uncaughtException");
  });

  process.on("unhandledRejection", (reason) => {
    console.error("💥 Unhandled Rejection:", reason);
    gracefulShutdown("unhandledRejection");
  });
}
(async () => {
  await startServer();
  await seedAdmin();
})();
