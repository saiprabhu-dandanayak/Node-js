import { User } from "../models/userModel";

export const displayUsers = (users: User[]): string => {
  return `Users:\n${users
    .map(user => `ID: ${user.id}, Name: ${user.name}, Email: ${user.email}`)
    .join("\n")}`;
};

export const displayMessage = (message: string): string => message;
