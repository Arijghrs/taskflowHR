import prisma from "../models/userModel.js";

export const GetTimeTrackingRecords = async (req, res) => {
  try {
    const records = await prisma.timeTracking.findMany({
      include: {
        user: {
          select: { id: true, name: true, email: true },
        },
      },
      orderBy: {
        date: "desc",
      },
    });

    const users = records.map((record) => {
      const lunchStart = new Date(record.lunchStart);
      const lunchEnd = new Date(record.lunchEnd);

      return {
        id: record.user.id,
        email: record.user.email,
        entryTime: record.entryTime.toLocaleTimeString(),
        lunchBreak: `${lunchStart.toLocaleTimeString()} - ${lunchEnd.toLocaleTimeString()} min`,
        exitTime: record.exitTime.toLocaleTimeString(),
      };
    });

    res.json(users); // Send the mapped users data
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
