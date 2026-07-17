import "dotenv/config";
import express from "express";
import healthRoutes from "./routes/health.routes.js";
import usersRoutes from "./routes/users.routes.js";
import { loggerMiddleware } from "./middlewares/logger.middleware.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";
const app=express();

app.use(express.json());
app.use(loggerMiddleware)
app.use("/health", healthRoutes);
app.use("/users", usersRoutes)
app.use(errorMiddleware);
export default app;