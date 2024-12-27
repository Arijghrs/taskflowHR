import express from "express";
import { GetTimeTrackingRecords } from "../controllers/hrController.js";

const router = express.Router();

router.get("/timeRecords", GetTimeTrackingRecords);

export default router;
