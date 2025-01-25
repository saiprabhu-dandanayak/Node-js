import { Request, Response } from 'express';
import { User } from '../models/User';
import { AadharCard } from '../models/AadharCard';

export const createUser = async (req: Request, res: Response):Promise<void> => {
  try {
    const { name, email, password, aadharNumber } = req.body;

    const user = await User.create({ name, email, password });
    await AadharCard.create({ aadharNumber, userId: user.id });

    res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
};

export const getUserWithAadhar = async (req: Request, res: Response):Promise<void> => {
  try {
    const { id } = req.params;

    const user = await User.findByPk(id, { include: [AadharCard] });

    if (!user) {
       res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user', error });
  }
};