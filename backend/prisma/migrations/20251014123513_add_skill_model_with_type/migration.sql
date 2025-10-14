/*
  Warnings:

  - You are about to drop the column `skills` on the `User` table. All the data in the column will be lost.
  - Added the required column `adminId` to the `Skill` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Skill` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "SkillType" AS ENUM ('TECHNICAL', 'SOFT');

-- AlterTable
ALTER TABLE "Skill" ADD COLUMN     "adminId" INTEGER NOT NULL,
DROP COLUMN "type",
ADD COLUMN     "type" "SkillType" NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "skills";

-- AddForeignKey
ALTER TABLE "Skill" ADD CONSTRAINT "Skill_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
