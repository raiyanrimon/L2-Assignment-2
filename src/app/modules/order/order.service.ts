import { OrderData } from "./order.interface";
import { OrderModel } from "./order.model";

const createOrdersIntoDB = async (order: OrderData) => {
  const result = await OrderModel.create(order);
  return result;
};

const getOrdersFromDB = async (email: string) => {
  try {
    const query = { email: new RegExp(email, "i") };
    const result = await OrderModel.find(query);
    return result;
  } catch (error) {
    throw new Error("Error fetching orders from database");
  }
};
export const OrderServices = {
  createOrdersIntoDB,
  getOrdersFromDB,
};
