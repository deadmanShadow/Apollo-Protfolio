import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { globalErrorHandler } from "./middlewares/globalErrorHandler";
import { router } from "./routes";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for handing form data
app.use(cookieParser());

app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Welcome to my backend API" });
});

//global error handle
app.use(globalErrorHandler);
//404 not found
app.use((req: Request, res: Response) => {
  res.status(StatusCodes.NOT_FOUND).json({
    success: false,
    message: "API route not found",
  });
});
export default app;
