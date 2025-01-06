import * as userModel from "../models/userModel";
import * as userView from "../views/userView";

export const getAllUsers = (): string => {
  const users = userModel.getAllUsers();
  return userView.displayUsers(users);
};

export const addUser = (id: number, name: string, email: string): string => {
  const existingUser = userModel.getUserById(id);
  if (existingUser) {
    return userView.displayMessage("User already exists!");
  }

  userModel.addUser({ id, name, email });
  return userView.displayMessage("User added successfully!");
};

export const deleteUser = (id: number): string => {
  const user = userModel.getUserById(id);
  if (user) {
    userModel.deleteUser(id);
    return userView.displayMessage("User deleted successfully!");
  }
  return userView.displayMessage("User not found!");
};
