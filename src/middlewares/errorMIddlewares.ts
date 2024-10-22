import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import { ValidationError } from "sequelize";
import { ZodError } from "zod";
import { NotFoundError } from "../models/exceptions";

export const errorHandler =(
  err: ErrorRequestHandler,
  req: Request,
  res: Response,
  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
) =>{
  console.error("Got an error", err)
  if (err instanceof ZodError) {
    res.status(404).json({message: "Invalid Data"})
  }else if (err instanceof NotFoundError){
    res.status(404).json({message: err.message})
  }else if (err instanceof ValidationError){
    res.status(422).json({message: err.message})
  }else{
    res.status(500).json({message: err})
  }
}