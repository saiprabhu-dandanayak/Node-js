import mongoose, { Schema, Document } from "mongoose";
import { IUser } from "../utils/interface";

const userSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
  password: { type: String, required: true },
});

export const User = mongoose.model<IUser>("User", userSchema);
