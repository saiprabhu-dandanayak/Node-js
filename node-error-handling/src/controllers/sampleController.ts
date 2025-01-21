import { Request, Response, NextFunction } from "express";

export const simulateError = (req: Request, res: Response, next: NextFunction) => {
  try {
    throw new Error("This is a simulated error");
  } catch (error) {
    next(error); 
  }
};
