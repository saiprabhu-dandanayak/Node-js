import mongoose from "mongoose";

export interface IUser extends Document {
    _id: mongoose.Types.ObjectId,
    name: string;
    email: string;
    age: number;
    password: string;
}