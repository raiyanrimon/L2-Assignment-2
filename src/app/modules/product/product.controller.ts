import { Request, Response } from "express";
import { ProductServices } from "./product.service";
import { ProductValidationDataSchema } from "./product.validation";

// createProduct api controller
const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    const zodParsedProduct = ProductValidationDataSchema.parse(productData);
    const result = await ProductServices.createProductsIntoDB(zodParsedProduct);
    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message:
        "Something went wrong and product is not created and should be unique ",
    });
  }
};

// getAllProducts api controller
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.searchTerm as string;
    const result = await ProductServices.getAllProductsFromDB(searchTerm);

    res.status(200).json({
      success: true,
      message: searchTerm
        ? `Products matching search term '${searchTerm}' fetched successfully!`
        : "Products fetched successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Products Not Found",
    });
  }
};

// getSingleProduct api controller
const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    const result = await ProductServices.getSingleProductFromDB(productId);
    res.status(200).json({
      success: true,
      message: "Product fetched successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Product Not Found",
    });
  }
};

// updateProduct api controller
const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const updatedProduct = req.body;
    const zodParsedProduct = ProductValidationDataSchema.parse(updatedProduct);
    const result = await ProductServices.updateSingleProductFromDB(
      productId,
      zodParsedProduct
    );

    res.status(200).json({
      success: true,
      message: "Product updated successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "something went wrong",
    });
  }
};

// DeleteProduct api controller
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.deleteProduct(productId);
    res.status(200).json({
      success: true,
      message: "Product deleted successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "An Error occurred",
    });
  }
};

export const ProductController = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
