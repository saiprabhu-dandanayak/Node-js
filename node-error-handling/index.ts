import express, { Application } from "express";
import errorRoutes from './src/routes/sampleRoutes'; 
import errorMiddleware from "./src/middlewares/errorHandler";

const app: Application = express();

app.use(express.json());

app.use("/api", errorRoutes);

app.use(errorMiddleware);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
