import express from "express";
import { productController } from "../../controllers/product.controller.js";

const router = express.Router();

router
  .route("/products")
  .get(productController.getProducts) // Get all Product from Database
  .post(productController.getProdutcsById); // Get list product by id

router.route("/products/search").get(productController.getSearchProduct);
router.route("/products/:id").get(productController.getProductSingle);
export const ProductRoute = router;
