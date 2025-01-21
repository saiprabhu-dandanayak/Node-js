import { Router } from "express";
import {
  createUser,
  deleteAllUsers,
  deleteUser,
  gettAllUsers,
  getUserById,
  updateUser,
} from "../controller/userController";

const router = Router();

router.get("/users", gettAllUsers);
router.get("/users/:id", getUserById);
router.post("/users", createUser);
router.patch("user/:id", updateUser);
router.delete("user/:id", deleteUser);
router.delete("users", deleteAllUsers);

export default router;
