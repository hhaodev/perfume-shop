import { getDB } from "../config/mongodb.js";
import mongoose from "mongoose";
import Joi from "joi";
const ProductCollectionName = "checkout";
const CheckoutCollectionSchema = Joi.object({
  fName: Joi.string(),
  lName: Joi.string(),
  country: Joi.string(),
  email: Joi.string(),
  orders: Joi.array(),
  state: Joi.string(),
  phone: Joi.string(),
  street: Joi.string(),
  status: Joi.boolean().default(false),
});
export const validateSchema = async (data) => {
  return await CheckoutCollectionSchema.validateAsync(data, {
    abortEarly: false,
  });
};
const checkout = async (checkout) => {
  try {
    const value = await validateSchema(checkout);
    const result = await getDB()
      .collection(ProductCollectionName)
      .insertOne(value);
    return result;
  } catch (error) {
    throw new Error(error);
  }
};
const getCheckout = async () => {
  try {
    const result = await getDB()
      .collection(ProductCollectionName)
      .find({})
      .toArray();
    return result;
  } catch (error) {
    throw new Error(error);
  }
};
export const checkoutModel = {
  checkout,
  getCheckout,
};
