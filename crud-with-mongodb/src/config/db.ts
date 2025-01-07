import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost/prabhu");
    console.log("Connected to MongoDB...");
  } catch (err) {
    if (err instanceof Error) {
      console.error("Error connecting to MongoDB:", err.message);
      process.exit(1);
    } 
  }
};

export default connectDB;
