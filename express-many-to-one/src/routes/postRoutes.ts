import express from "express";
import { createPost, getPostWithUser } from "../controllers/postController";

const router = express.Router();

router.post("/posts", createPost);
router.get("/posts/:id", getPostWithUser);

export default router;
