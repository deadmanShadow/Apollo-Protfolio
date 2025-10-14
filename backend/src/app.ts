import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { globalErrorHandler } from "./middlewares/globalErrorHandler";
import { router } from "./routes";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000"], // Use comma after 3000 and add the frontend url
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Welcome to Protfolio Backend" });
});

app.use(globalErrorHandler);

app.use((req: Request, res: Response) => {
  res.status(StatusCodes.NOT_FOUND).json({
    success: false,
    message: "API route not found",
  });
});
export default app;
