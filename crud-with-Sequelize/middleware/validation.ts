import { check } from "express-validator";
import { validateData } from "./dataValidate";

export const validateUser  = [
    check("name")
       .notEmpty()
       .withMessage("Name is required")
       .isLength({ min: 3, max: 50 })
       .withMessage("Name must be between 3 and 50 characters long"),

    check("email")
       .notEmpty()
       .withMessage("Email is required")
       .isEmail()
       .withMessage("Email must be valid"),

    check("password")
       .notEmpty()
       .withMessage("Password is required")
       .isLength({ min: 8, max: 50 })
       .withMessage("Password must be between 8 and 50 characters long")
       .matches(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,50}/),
       validateData
]