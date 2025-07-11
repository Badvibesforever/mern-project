import express from "express";

import { getProducts } from "../controllers/product.controllers.js";

import {
  createProduct,
  deleteProduct,
  updateProduct,
} from "../controllers/product.controllers.js";
const router = express.Router();

router.get("/", getProducts);

router.post("/", createProduct);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

export default router;
