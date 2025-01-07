import { Router } from "express";
import { validateUser } from "../middleware/validate";
import {
  getAllUsers,
  getUserById,
  updateUser,
  createUser,
  deleteAllUsers,
  deleteUser,
} from "../controller/userController";

const router = Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/", validateUser ,createUser);
router.patch("/:id",validateUser,updateUser);
router.delete("/", deleteAllUsers);
router.delete("/:id", deleteUser);

export default router;
