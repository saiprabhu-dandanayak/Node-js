import { Request, Response, NextFunction } from "express";

const errorMiddleware = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error("Error:", err.message); 
  res.status(500).json({ error: err.message }); 
};

export default errorMiddleware;
