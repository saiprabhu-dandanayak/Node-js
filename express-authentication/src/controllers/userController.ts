import { Response, Request } from "express";
import { User } from "../models/userModel";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const JWT_SECRET =
  "ea90b924fe92347bcd08fbe13f8b09f6c9ad5a3dbfbb8c8f10f7ae81257c394e4c1dba29a8e71c0d4a91729af86c417e2dc382df5df65d15f7d07dfedfd8ff43";

export const registerUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { username, email,age, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(400).json({ message: "User already exists!" });
      return;
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({ username, email, age, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    console.error("Error during user registration:", error);
    res.status(500).json({ message: "Server error!", error });
  }
};

export const loginUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      res.status(404).json({ message: "User not found!" });
      return;
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(400).json({ message: "Invalid credentials!" });
      return;
    }
    const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(200).json({ message: "Login successful!", token });
  } catch (error) {
    console.error("Error during user login:", error);
    res.status(500).json({ message: "Server error!", error });
  }
};
