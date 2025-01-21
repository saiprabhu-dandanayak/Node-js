import express from "express";
import mongoose from "mongoose";
import userRoutes from "./src/routes/userRoutes";

const app = express();

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/prabhu")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

app.use("/api", userRoutes);

export default app;
