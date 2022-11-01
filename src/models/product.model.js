import { ObjectId } from "mongodb";
import { getDB } from "../config/mongodb.js";
import { HttpStatusCode } from "../utilities/constants.js";

const ProductCollectionName = "products";
const getProducts = async () => {
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

const getProductSingle = async (idProduct) => {
  try {
    const pid = new ObjectId(idProduct);
    const result = await getDB()
      .collection(ProductCollectionName)
      .findOne({ _id: pid });
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

const getProdutcsById = async (listId) => {
  try {
    const listIdProduct = listId.map((product) => {
      return ObjectId(product._id);
    });
    let updateProduct = listId.map((product) => {
      return {
        updateOne: {
          filter: { _id: ObjectId(product._id) },
          update: { $set: { quantity: product.quantity } },
        },
      };
    });
    await getDB().collection(ProductCollectionName).bulkWrite(updateProduct);
    const result = await getDB()
      .collection(ProductCollectionName)
      .find({ _id: { $in: listIdProduct } })
      .toArray();

    return result;
  } catch (error) {
    throw new Error(error);
  }
};
export const productModel = { getProducts, getProductSingle, getProdutcsById };
