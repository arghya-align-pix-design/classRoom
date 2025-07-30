/*
  Warnings:

  - Added the required column `teacherId` to the `SubjectSchedule` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SubjectSchedule" ADD COLUMN     "teacherId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "SubjectSchedule" ADD CONSTRAINT "SubjectSchedule_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
