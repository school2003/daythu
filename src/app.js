import mongoose from "mongoose";
import express  from "express";
import productRouter from "./routers/product"

const app = express();

//middleware
app.use(express.json());

//routers
app.use("/api",productRouter)

export const viteNodeApp=app;
mongoose.connect("mongodb://127.0.0.1:27017/school")
