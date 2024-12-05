-- CreateEnum
CREATE TYPE "Role" AS ENUM ('EMPLOYEE', 'HR');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "department" TEXT NOT NULL DEFAULT '';
