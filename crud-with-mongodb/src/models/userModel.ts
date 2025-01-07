import mongoose, {Schema , Document} from "mongoose";

export  interface IUser extends Document {
    name : string;
    email : string;
    age : number;
    password : string;
}

const userSchema : Schema= new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true },
    password: { type: String, required: true }
});


const User= mongoose.model<IUser>("User", userSchema); 

export default User;