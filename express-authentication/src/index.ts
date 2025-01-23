import express, { Application } from "express";
import userRoutes from "./routes/userRoutes";
import { connectDb } from "./config/database";

const app: Application = express();
app.use(express.json());

connectDb();

app.use("/api/auth", userRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Authentication API!");
});

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});
