import { Request, Response } from "express";
import User from "../models/userModel";

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;
    const users = await User.find()
      .skip(skip)
      .limit(limit);

    res.json({
      users,
      pagination: {
        page,
        limit
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching users', error });
  }
};

export const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const { name, email } = req.body;
  
      if (!name || !email) {
        res.status(400).json({ message: "Name and email are required" });
        return;
      }
      const newUser = new User({
        name,
        email,
      });
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } catch (error) {
      res.status(500).json({ message: "Error creating user", error });
    }
  };