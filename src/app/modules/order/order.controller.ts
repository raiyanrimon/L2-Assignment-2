import { Request, Response } from "express";
import { OrderServices } from "./order.service";
import { orderValidationDataSchema } from "./order.validation";
import { ProductModel } from "../product/product.model";

// createOrder api controller
const createOrdersIntoDB = async (req: Request, res: Response) => {
  try {
    // getting orderData from client
    const orderData = req.body;
    // destructuring for finding product  by productId
    const { productId, quantity } = orderData;

    const product = await ProductModel.findById(productId);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
    // if product quantity is lower than order quantity, then will show insufficient error
    if (product.inventory.quantity < quantity) {
      return res.status(400).json({
        success: false,
        message: "Insufficient quantity available in inventory",
      });
    }
    // lowering quantity after the order
    product.inventory.quantity -= quantity;
    // if product quantity is 0, then it will change inStock to false
    product.inventory.inStock = product.inventory.quantity > 0;
    // saving inventory updated quantity to database
    await product.save();
    // validating data via zod validator
    const zodParsedOrder = orderValidationDataSchema.parse(orderData);
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

// getAllOrders api controller
const getAllOrders = async (req: Request, res: Response) => {
  try {
    // taking email as params query
    const email = req.query.email as string;
    // getting order from DB
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
