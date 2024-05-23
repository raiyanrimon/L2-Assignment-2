import express from "express";

import { OrderController } from "./order.controller";
const router = express.Router();
// routes list
router.post("/", OrderController.createOrdersIntoDB);
router.get("/", OrderController.getAllOrders);

export const OrderRoutes = router;
