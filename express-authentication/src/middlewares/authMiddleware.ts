import { Request, Response, NextFunction } from 'express';
import { body, validationResult, ValidationChain } from 'express-validator';

export const validateUser: (ValidationChain | ((req: Request, res: Response, next: NextFunction) => void))[] = [
  body("name").notEmpty().withMessage("Name is required"),
  body("email").isEmail().withMessage("Please enter a valid email"),
  body("age").isInt({ gt: 0 }).withMessage("Age must be a positive integer"),
  body("password").notEmpty().withMessage("Password is required"),
  (req: Request, res: Response, next: NextFunction): void => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
       res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];