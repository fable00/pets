import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import { ValidationError } from "sequelize";
import { ZodError } from "zod";

export const errorHandler =(
  err: ErrorRequestHandler,
  req: Request,
  res: Response,
  next: NextFunction,

) =>{
  console.error("Got an error", err)
  if (err instanceof ZodError) {
    res.status(404)
  }
}