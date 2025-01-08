import  User from '../models/userModel';
import { Request , Response } from "express";

export const getAllUsers = async (req:Request, res:Response) => {
  try {
    const users = await User.find();
    res.render('users/index', { users });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching users' });
  }
};

export const getUserById = async (req:Request, res:Response) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.render('users/show', { user });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching user' });
  }
};

export const createUserForm = (req:Request, res:Response) => {
  res.render('users/form', { user: null });
};

export const createUser = async (req:Request, res:Response) => {
  const { firstName, lastName, email, jobTitle } = req.body;

  try {
    const newUser = new User({ firstName, lastName, email, jobTitle });
    await newUser.save();
    res.redirect('/users');
  } catch (err) {
    res.status(400).json({ message: 'Error creating user' });
  }
};

export const updateUserForm = async (req:Request, res:Response) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.render('users/form', { user });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching user' });
  }
};

export const updateUser = async (req:Request, res:Response) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );
    res.redirect('/users');
  } catch (err) {
    res.status(400).json({ message: 'Error updating user' });
  }
};

export const deleteUser = async (req:Request, res:Response) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.redirect('/users');
  } catch (err) {
    res.status(500).json({ message: 'Error deleting user' });
  }
};
