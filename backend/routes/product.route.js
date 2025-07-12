import express from "express";
import {
  getProducts,
  getMyProducts,
  createProduct,
  deleteProduct,
  updateProduct,
} from "../controllers/product.controllers.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getProducts);

router.get("/my", protect, getMyProducts);
router.post("/", protect, createProduct);
router.put("/:id", protect, updateProduct);
router.delete("/:id", protect, deleteProduct);

export default router;
