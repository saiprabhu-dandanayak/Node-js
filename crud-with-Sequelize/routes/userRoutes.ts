import { Router } from "express";
import {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  deleteAllUsers,
} from "../controller/userController";
import { validateUser } from "../middleware/validation";

const router = Router();

router.post("/users",validateUser, createUser);
router.get("/users", getAllUsers);
router.get("/users/:id", getUserById);
router.patch("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);
router.delete("/users", deleteAllUsers);


export default router;