import { User } from "../models/user"

export const checkEmailExists = (email: string):boolean =>{
    const user = User.findOne({where : { email: email},});
    if(!user) return false;
    return true;
}