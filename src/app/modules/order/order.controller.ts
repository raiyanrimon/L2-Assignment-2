import { Request, Response } from "express";
import { OrderServices } from "./order.service";
import { orderValidationDataSchema } from "./order.validation";
import { ProductModel } from "../product/product.model";

const createOrdersIntoDB = async (req: Request, res: Response) => {
  try {
    const { order: OrderData } = req.body;
    const { productId, quantity } = OrderData;
    const product = await ProductModel.findById(productId);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    if (product.inventory.quantity < quantity) {
      return res.status(400).json({
        success: false,
        message: "Insufficient quantity available in inventory",
      });
    }
    product.inventory.quantity -= quantity;
    product.inventory.inStock = product.inventory.quantity > 0;
    await product.save();
    const zodParsedOrder = orderValidationDataSchema.parse(OrderData);
    const result = await OrderServices.createOrdersIntoDB(zodParsedOrder);
    res.status(200).json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "ProductId not found",
    });
  }
};

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const email = req.query.email as string;
    const result = await OrderServices.getOrdersFromDB(email);

    if (email) {
      res.status(200).json({
        success: true,
        message: `Orders matching for user email:'${email}' fetched successfully!`,
        data: result,
      });
    } else {
      res.status(200).json({
        success: true,
        message: `Orders fetched successfully!`,
        data: result,
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "An Error occurred",
    });
  }
};

export const OrderController = {
  createOrdersIntoDB,
  getAllOrders,
};
