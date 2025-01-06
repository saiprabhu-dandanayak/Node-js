import { Request, Response ,NextFunction } from "express";

/*
  This is a application level Middleware for logging incoming requests.
*/
export const logRequests = (req: Request, res: Response , next : NextFunction) =>{
    console.log(`${req.method} to ${req.url} at ${Date.now()}`);
    next();
}