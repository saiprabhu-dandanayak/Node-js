import { Request, Response, NextFunction } from 'express';
/*
// Middleware to validate if a user is authenticated
*/
export const authenticateUser = (req: Request, res: Response, next: NextFunction): void => {
  if (!req.headers.authorization) {
     res.status(403).json({ message: 'Unauthorized' }); 
  }
  next();
};

