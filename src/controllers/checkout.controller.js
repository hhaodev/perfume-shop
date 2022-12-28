import { checkoutService } from "../services/checkout.service.js";
import { HttpStatusCode } from "../utilities/constants.js";

const checkout = async (req, res) => {
  try {
    const result = await checkoutService.checkout(req.body);
    res.status(HttpStatusCode.OK).json({
      data: result,
    });
  } catch (error) {
    res.status(HttpStatusCode.BAD_REQUEST).json({
      data: error,
    });
  }
};

const getCheckout = async (req, res) => {
  try {
    const result = await checkoutService.getCheckout();
    res.status(HttpStatusCode.OK).json({
      data: result,
    });
  } catch (error) {
    res.status(HttpStatusCode.BAD_REQUEST).json({
      data: error,
    });
  }
};
export const checkoutController = { checkout, getCheckout };
