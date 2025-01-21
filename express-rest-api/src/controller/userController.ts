import { userrData } from "../data/sampleData";
import { Request,Response } from "express";


export const gettAllUsers = async (req:Request,res:Response): Promise<void>=>{
    res.status(200).json(userrData);
}

export const getUserById = async (req:Request,res:Response): Promise<void>=>{
    const user = userrData.find((u) => u.id === parseInt(req.params.id));
    if(!user) res.status(404).json({message : "User not found"});
    res.status(200).json(user);
}

export const createUser = async (req:Request,res:Response): Promise<void>=>{
    const newUser = {
        id: userrData.length + 1,
        name: req.body.name,
        email: req.body.email,
        age: parseInt(req.body.age),
        password: req.body.password
    }
    userrData.push(newUser);
    res.status(201).json(newUser);
}

export const updateUser = async (req:Request,res:Response): Promise<void>=>{
    const userId = parseInt(req.params.id, 10); 
    const user = userrData.find((u) => u.id === userId);

    if (!user) {
        res.status(404).json({ message: "User not found" });
        return; 
    }

    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.age = req.body.age ? parseInt(req.body.age, 10) : user.age;
    user.password = req.body.password || user.password;

    res.status(200).json(user); 
}

export const deleteUser = async (req:Request,res:Response): Promise<void>=>{
    const index = userrData.findIndex((u) => u.id === parseInt(req.params.id));
    if(index === -1) res.status(404).json({message : "User not found"});
    userrData.splice(index, 1);
    res.status(204).send();
}

export const deleteAllUsers = async (req:Request,res:Response): Promise<void>=>{
    userrData.length = 0;
    res.status(204).send();
}