import { Router } from "express";
import express from 'express';
import { Login, RegisterController } from "../controller/authController.js";
import { CreateProductController, DeleteProductController, GetProductController, UpdateProductController, singleProductController } from "../controller/productController.js";
import { isAdmin } from "../middlewares/authMiddlewares.js";
const router=express.Router()

router.post('/createProducts',CreateProductController)
router.get('/GetProducts',GetProductController)
router.put('/updateProducts/:id',UpdateProductController)
router.get('/getSingleProduct/:slug',singleProductController)
router.delete('/deleteProduct/:id',DeleteProductController)


export default router;
