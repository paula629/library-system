import { Request, Response, NextFunction } from "express";

export const loggerMiddleware =(
    req:Request,
    res:Response,
    next:NextFunction
)=>{
    console.log(`${req.method}${req.originalUrl}`);
    console.log("este es el middleware")
    next();
};