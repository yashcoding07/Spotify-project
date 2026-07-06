import express from "express";
import * as authController from "../controllers/auth.controller.js";
import * as validationMiddleware from "../middlewares/validation.middleware.js";

const router = express.Router();

router.post("/register",validationMiddleware.registerValidation, authController.registerUser);

export default router;