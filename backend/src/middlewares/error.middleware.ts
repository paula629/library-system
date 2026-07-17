import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError.js";


export const errorMiddleware = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {

  console.error(err);


  if (err instanceof AppError) {

    return res.status(err.statusCode).json({
      status: "error",
      message: err.message
    });

  }


  return res.status(500).json({
    status: "error",
    message: "Error interno del servidor"
  });

};