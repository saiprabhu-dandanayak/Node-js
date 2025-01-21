import express from "express";
import userRoutes from "./src/routes/userRoutes"

const app = express();

app.use(express.json());
app.use('/api/v1',userRoutes);

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})