import { ProductData } from "./product.interface";
import { ProductModel } from "./product.model";

const createProductsIntoDB = async (product: ProductData) => {
  const result = await ProductModel.create(product);
  return result;
};

const getAllProductsFromDB = async (searchTerm: string) => {
  try {
    // searchTerm Query
    const query = {
      $or: [
        { name: new RegExp(searchTerm, "i") },
        {
          description: new RegExp(searchTerm, "i"),
        },
        { category: new RegExp(searchTerm, "i") },
      ],
    };
    if (query) {
      const result = await ProductModel.find(query);
      return result;
    } else {
      const result = await ProductModel.find();
      return result;
    }
  } catch (error) {
    throw new Error("Error fetching products from database");
  }
};

const getSingleProductFromDB = async (productId: string) => {
  const result = await ProductModel.findById(productId);
  return result;
};

const updateSingleProductFromDB = async (
  productId: string,
  updatedProduct: ProductData
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
