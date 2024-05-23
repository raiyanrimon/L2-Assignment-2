import { Schema, model } from "mongoose";
import { ProductData } from "./product.interface";

const VariantSchema = new Schema({
  type: String,
  value: String,
});

const InventorySchema = new Schema({
  quantity: Number,
  inStock: Boolean,
});

//creating product Schema
const ProductSchema = new Schema<ProductData>({
  name: { type: String, unique: true },
  description: String,
  price: Number,
  category: String,
  tags: [String],
  variants: [VariantSchema],
  inventory: InventorySchema,
});

export const ProductModel = model("Product", ProductSchema);
