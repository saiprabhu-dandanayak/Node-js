import { Request ,Response } from "express";
import { User } from "../models/user";

export const createUser = async (req : Request , res:Response): Promise<void> =>{
    try {
        const { name, email, password } = req.body;
        const user = await User.create({ name, email, password });
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
}

export const getAllUsers = async (req : Request , res:Response): Promise<void> =>{
    try{
        const users = await User.findAll();
        if(users.length==0) res.status(200).json({message : "No users found"});
        res.status(200).json(users);
    }catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
}

export const getUserById = async (req : Request , res:Response): Promise<void> =>{
    try{
        const user = await User.findByPk(parseInt(req.params.id));
        if(!user) res.status(404).json({message : "User not found"});
        res.status(200).json(user);
    }catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
}

export const updateUser = async (req : Request , res:Response): Promise<void> =>{
    try{
        const user = await User.findByPk(parseInt(req.params.id));
        if(!user) res.status(404).json({message : "User not found"});
        await user?.update(req.body);
        res.status(200).json(user);
    }catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
}

export const deleteUser = async (req : Request , res:Response): Promise<void> =>{
    try{
        const user = await User.findByPk(parseInt(req.params.id));
        if(!user) res.status(404).json({message : "User not found"});
        await user?.destroy();
        res.status(200).json({message : "User deleted successfully"});
    }catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
}

export const deleteAllUsers = async (req:Request,res:Response):Promise<void> =>{
    try{
        const users = await User.findAll();
        if(users.length==0) res.status(200).json({message : "No users found"});
        for(let user of users){
            await user?.destroy();
        }
    }catch(error) {
        res.status(500).json({ error: (error as Error).message });
    }
}