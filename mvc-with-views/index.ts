import express from "express";
import path from "path";
import connectDB from "./config/db";
import userRoutes from "./routes/userRoutes";


const app = express();

connectDB();

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(userRoutes);


app.listen(3000, () => {
  console.log(`Server started at http://localhost:3000`);
});
