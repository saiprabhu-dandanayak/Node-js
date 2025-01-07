import { Request, Response } from "express";
import User from "../models/userModel";
import bcrypt from "bcrypt"


export const getAllUsers = async (req: Request, res: Response) : Promise<void>  => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getUserById = async (req: Request, res: Response): Promise<void>   => {
    try {
      const user = await User.findById(req.params.id);
      if (!user) {
        res.status(404).json({ message: "User not found" });
        return;
      }
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json({ message: "Internal server error" });
    }
  };
  

export const createUser = async (req: Request, res: Response): Promise<void>  => {
  const { name, email, age, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password,10);
    const newUser = new User({ name, email, age, password:hashedPassword });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    console.error("🚨 Error in createUser:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateUser = async (req: Request, res: Response): Promise<void>  => {
  const { name, email, age, password } = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { name, email, age, password },
      { new: true }
    );
    if (!updatedUser) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteUser = async (req: Request, res: Response): Promise<void>  => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteAllUsers = async (req: Request, res: Response): Promise<void>  => {
  try {
    const result = await User.deleteMany();
    if (result.deletedCount === 0) {
      res.status(404).json({ message: "No users found to delete" });
      return;
    }
    res.status(200).json({ message: "All users deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};
