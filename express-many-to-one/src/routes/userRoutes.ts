import express from "express";
import { createUser, getUserWithPosts } from "../controllers/userController";

const router = express.Router();

router.post("/users", createUser);
router.get("/users/:id", getUserWithPosts);

export default router;
