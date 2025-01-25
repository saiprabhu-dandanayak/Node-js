import { Request, Response } from 'express';
import { AadharCard } from '../models/AadharCard';

export const getAadharWithUser = async (req: Request, res: Response):Promise<void> => {
  try {
    const { id } = req.params;

    const aadharCard = await AadharCard.findByPk(id, { include: ['user'] });

    if (!aadharCard) {
       res.status(404).json({ message: 'AadharCard not found' });
    }

    res.status(200).json({ aadharCard });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching AadharCard', error });
  }
};