import mongoose from "mongoose";

export const connectDb = async ()=>{
    try{
        await mongoose.connect("mongodb://localhost/Authentication");
        console.log("Connected to MongoDB...");
    }catch(err){
        console.error("Error connecting to MongoDB:");
    }
}