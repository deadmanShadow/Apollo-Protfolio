-- DropIndex
DROP INDEX "public"."Skill_name_key";

-- AlterTable
ALTER TABLE "Skill" ADD COLUMN     "type" TEXT;
