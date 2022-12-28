import { getDB } from "../config/mongodb.js";
import mongoose from "mongoose";
import Joi from "joi";
const ProductCollectionName = "checkout";
const CheckoutCollectionSchema = Joi.object({
  fName: Joi.string().required().min(6),
  lName: Joi.string().required(),
  country: Joi.string().required(),
  email: Joi.string().required(),
  orders: Joi.array().required(),
  state: Joi.string().required(),
  phone: Joi.string().required(),
  street: Joi.string().required(),
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
