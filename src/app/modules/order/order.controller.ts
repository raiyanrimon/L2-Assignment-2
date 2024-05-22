import { Request, Response } from "express";
import { OrderServices } from "./order.service";
import { orderValidationDataSchema } from "./order.validation";

const createOrdersIntoDB = async (req: Request, res: Response) => {
  try {
    const { order: OrderData } = req.body;
    const zodParsedOrder = orderValidationDataSchema.parse(OrderData);
    const result = await OrderServices.createOrdersIntoDB(zodParsedOrder);
    if (result) {
    }
    res.status(200).json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "An Error occurred",
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
