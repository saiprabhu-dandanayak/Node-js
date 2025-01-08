import mongoose from "mongoose";

const connectDB = async ()  => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/prabhu"); 
    console.log(`Database connected successfully at ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error while connecting with database: ${(error)}`);
    process.exit(1);
  }
};

export default connectDB;

