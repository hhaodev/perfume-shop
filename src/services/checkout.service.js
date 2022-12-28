import { checkoutModel } from '../models/checkout.model.js';

const checkout = async (checkout) => {
  try {
    const result = await checkoutModel.checkout(checkout);
    return result;
  } catch (error) {
    throw new Error(error);
  }
};
const getCheckout = async () => {
  try {
    const result = await checkoutModel.getCheckout();
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

const updateCheckout = async (data) => {
  try {
    const result = await checkoutModel.updateCheckout(data);
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

export const checkoutService = { checkout, getCheckout, updateCheckout };
