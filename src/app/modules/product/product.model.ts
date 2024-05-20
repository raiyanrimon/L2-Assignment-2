import { Schema, model } from "mongoose";
import { ProductData } from "./product.interface";
import { ProductDataSchema } from "./product.validation";

const productSchema = new Schema<ProductData>(ProductDataSchema);

export const ProductModel = model("Product", productSchema);
