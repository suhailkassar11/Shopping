import { Router } from "express";
import express from 'express';
import { GetUser, Login, RegisterController, testController } from "../controller/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddlewares.js";
const router=express.Router()

router.post('/register',RegisterController)
router.post('/login',Login)
router.get('/test',requireSignIn,isAdmin,testController)
router.get('/getUser',GetUser)

export default router;
