import { Request, Response } from 'express';
import { Post } from '../models/Post';

export const createPost = async (req: Request, res: Response):Promise<void> => {
  try {
    const { title, content, userId } = req.body;
    const post = await Post.create({ title, content, userId });
    res.status(201).json({ message: 'Post created successfully', post });
  } catch (error) {
    res.status(500).json({ message: 'Error creating post', error });
  }
};

export const getPostWithUser = async (req: Request, res: Response):Promise<void> => {
  try {
    const { id } = req.params;
    const post = await Post.findByPk(id, { include: ['user'] });
    if (!post) {
       res.status(404).json({ message: 'Post not found' });
    }
    res.status(200).json({ post });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching post', error });
  }
};