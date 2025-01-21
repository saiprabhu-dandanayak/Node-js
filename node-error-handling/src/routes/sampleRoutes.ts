import { Router } from "express";
import { simulateError } from "../controllers/sampleController";

const router = Router();

router.get("/error", simulateError);

export default router;
