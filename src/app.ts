import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { ProductRoutes } from "./app/modules/product/product.route";
import { OrderRoutes } from "./app/modules/order/order.route";
const app: Application = express();

app.use(express.json());
app.use(cors());

app.use("/api/products", ProductRoutes);
app.use("/api/orders", OrderRoutes);
app.get("/", (req: Request, res: Response) => {
  res.send("Server is Running");
});
app.use((req: Request, res: Response) => {
  res.status(404).send({
    success: false,
    message: "Route Not Found",
  });
});

export default app;
