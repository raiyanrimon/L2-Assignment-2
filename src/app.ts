import express, { Application, Request, Response } from "express";
import cors from "cors";
const app: Application = express();

app.use(express.json());
app.use(cors());

app.use("/api/products");

app.get("/", (req: Request, res: Response) => {
  res.send("Server is Running");
});

export default app;
