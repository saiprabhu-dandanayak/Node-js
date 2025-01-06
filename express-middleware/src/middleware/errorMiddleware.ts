import { Request, Response, NextFunction } from 'express';

/* Global error handling middleware */
export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
};
