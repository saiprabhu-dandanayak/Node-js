// /routes/userRoutes.ts
import express from "express";
import * as userController from "../controllers/userController";

const userRoutes = express.Router();

userRoutes.get("/", (req, res) => {
  const result = userController.getAllUsers();
  res.send(result);
});

userRoutes.post("/", (req, res) => {
  const { id, name, email } = req.body;
  const result = userController.addUser(id, name, email);
  res.send(result);
});

userRoutes.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const result = userController.deleteUser(id);
  res.send(result);
});

export default userRoutes;
