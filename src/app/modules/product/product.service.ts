import { ProductData } from "./product.interface";
import { ProductModel } from "./product.model";

const createProductsIntoDB = async (product: ProductData) => {
  const result = await ProductModel.create(product);
  return result;
};

const getAllProducts = async () => {
  const result = await ProductModel.find();
  return result;
};
export const ProductServices = {
  createProductsIntoDB,
  getAllProducts,
};
