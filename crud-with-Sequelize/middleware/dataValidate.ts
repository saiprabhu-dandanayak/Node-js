import  {Request , Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

export const validateData = (req:Request, res:Response , next :NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(" error array ",errors.array());
        res.status(400).json({ errors: errors.array() });
        return;
    }
    next();
}