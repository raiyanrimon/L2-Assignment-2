import { Schema, model } from "mongoose";
import { OrderData } from "./order.interface";

const OrderSchema = new Schema<OrderData>({
  email: String,
  productId: String,
  price: Number,
  quantity: Number,
});

export const OrderModel = model("order", OrderSchema);
