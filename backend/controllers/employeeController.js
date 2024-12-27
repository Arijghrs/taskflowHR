import { PrismaClient } from "@prisma/client";
import { combineDateWithTime } from "../utils/utils.js";

const prisma = new PrismaClient();

export const SubmitTimeTracking = async (req, res) => {
  try {
    if (!req.user?.userId) {
      return res.status(401).json({ error: "User not authenticated" });
    }

    const { entryTime, lunchStart, lunchEnd, exitTime } = req.body;
    const userId = req.user.userId;

    // Validate required fields
    if (!entryTime || !lunchStart || !lunchEnd || !exitTime) {
      return res.status(400).json({ error: "All time fields are required" });
    }

    const timeTracking = await prisma.timeTracking.create({
      data: {
        userId,
        entryTime: combineDateWithTime(entryTime),
        lunchStart: combineDateWithTime(lunchStart),
        lunchEnd: combineDateWithTime(lunchEnd),
        exitTime: combineDateWithTime(exitTime),
      },
    });

    res.status(201).json(timeTracking);
  } catch (error) {
    console.error("Time tracking error:", error);
    res.status(500).json({ error: "Failed to submit time tracking" });
  }
};


export const SubmitHoliday = async (req, res) => {
  try {
    if (!req.user?.userId) {
      return res.status(401).json({ error: "User not authenticated" });
    }

    const { reason, startTime, endTime } = req.body;
    const userId = req.user.userId;

    const user = await prisma.user.findUnique({ where: { id: userId } });

    // Validate required fields
    if (!reason || !startTime || !endTime) {
      return res.status(400).json({ error: "All holiday fields are required" });
    }

    const holiday = await prisma.holiday.create({
      data: {
        userId,
        reason,
        startTime: combineDateWithTime(startTime),
        endTime: combineDateWithTime(endTime),
      },
    });

    res.status(201).json(holiday);
  } catch (error) {
    console.error("Holiday submission error:", error);
    res.status(500).json({ error: "Failed to submit holiday" });
  }
};
