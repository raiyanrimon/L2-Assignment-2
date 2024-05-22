import { Request, Response } from "express";
import { ProductServices } from "./product.service";
import { ProductValidationDataSchema } from "./product.validation";

const createProduct = async (req: Request, res: Response) => {
  try {
    const { product: ProductData } = req.body;
    const zodParsedProduct = ProductValidationDataSchema.parse(ProductData);
    const result = await ProductServices.createProductsIntoDB(zodParsedProduct);
    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "An Error occurred",
    });
  }
};
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProductsFromDB();
    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "An Error occurred",
    });
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    const result = await ProductServices.getSingleProductFromDB(productId);

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product fetched successfully!",
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
};
