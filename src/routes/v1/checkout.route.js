import express from 'express';
import { checkoutController } from '../../controllers/checkout.controller.js';
const router = express.Router();

router
  .route('/checkout')
  .post(checkoutController.checkout)
  .get(checkoutController.getCheckout)
  .put(checkoutController.updateCheckout);

export const checkoutRoute = router;
