import { ProductData } from "./product.interface";
import { ProductModel } from "./product.model";

const createProductsIntoDB = async (product: ProductData) => {
  const result = await ProductModel.create(product);
  return result;
};

const getAllProductsFromDB = async () => {
  const result = await ProductModel.find();
  return result;
};

const getSingleProductFromDB = async (_id: string) => {
  const result = await ProductModel.findOne({ _id });
  return result;
};

const updateSingleProductFromDB = async (
  productId: string,
  updatedProduct: any
) => {
  const result = await ProductModel.findOneAndUpdate(
    { _id: productId },
    updatedProduct,
    { new: true, runValidators: true }
  );
  return result;
};
export const ProductServices = {
  createProductsIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  updateSingleProductFromDB,
};
