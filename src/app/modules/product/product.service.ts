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

const getSingleProductFromDB = async (productId: string) => {
  const result = await ProductModel.findOne({ _id: productId });
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

const deleteProduct = async (productId: string) => {
  const result = await ProductModel.findByIdAndDelete({ _id: productId });
  return result;
};
export const ProductServices = {
  createProductsIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  updateSingleProductFromDB,
  deleteProduct,
};
