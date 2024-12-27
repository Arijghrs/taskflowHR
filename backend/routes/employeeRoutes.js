import express from "express";
import { SubmitHoliday, SubmitTimeTracking } from "../controllers/employeeController.js";
import { authenticateNewToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/trackTime", authenticateNewToken, SubmitTimeTracking);
router.post("/holiday", SubmitHoliday);

export default router;
