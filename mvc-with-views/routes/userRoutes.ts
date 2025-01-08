const express = require("express");
import {
  getAllUsers,
  getUserById,
  createUserForm,
  createUser,
  updateUserForm,
  updateUser,
  deleteUser,
} from "../controllers/userController";

const router = express.Router();

router.get("/users", getAllUsers);
router.get("/users/new", createUserForm);
router.get("/users/:id", getUserById);
router.get("/users/:id/edit", updateUserForm);
router.post("/users", createUser);
router.patch("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

export default router;
