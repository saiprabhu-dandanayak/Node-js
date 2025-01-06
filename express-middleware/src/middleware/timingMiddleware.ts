import { Request, Response, NextFunction } from 'express';

/* Middleware to track request processing time
*/
export const requestTimeLogger = (req: Request, res: Response, next: NextFunction) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`Request to ${req.url} took ${duration}ms`);
  });
  next(); 
};
