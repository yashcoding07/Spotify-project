import {validationResult, body } from "express-validator";

async function validate(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
}

export const registerValidation = [
    body("email").isEmail().withMessage("Invalid email address"),
    body("fullName.firstName").notEmpty().withMessage("First name is required"),
    body("fullName.lastName").notEmpty().withMessage("Last name is required"),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long"),
    validate
]