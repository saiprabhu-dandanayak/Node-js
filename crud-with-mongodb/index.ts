import express from 'express';
import userRoutes from './src/routes/userRoutes';
import connectDB from './src/config/db';
import path from 'path';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use('/api/v1/users', userRoutes);

connectDB();

app.listen(3000, ()=>{
    console.log('Server is running on port 3000')
})