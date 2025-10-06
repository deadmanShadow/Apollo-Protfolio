import compression from "compression";
import cors from "cors";
import express from "express";
import globalErrorHandler from "./app/middleware/globalErrorHandler";
import { router } from "./app/routes";
import notFound from "./utils/notFound";

const app = express();

// Middleware
app.use(cors());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

// Default route for testing
app.get("/", (_req, res) => {
  res.send("API is running");
});

app.use("/api/v1", router);

app.use(notFound);

// Global Error Handler
app.use(globalErrorHandler);

export default app;
