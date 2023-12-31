import { Router } from "express";
import { productController } from "../controllers/product.controller.js";

const router = Router();

router.get("/", productController.getAllProducts);
router.get("/:id", productController.getProductById);
router.post("/", productController.createProduct);

export default router;
