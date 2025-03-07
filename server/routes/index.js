import { Router } from "express";
import { userRouter } from "./userRuotes.js";
import { thoughtRouter } from "./thoughtRoutes.js";

const router = Router();

router.use("/users", userRouter);
router.use("/thoughts", thoughtRouter);

export default router;
