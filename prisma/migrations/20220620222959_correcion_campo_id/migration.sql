/*
  Warnings:

  - You are about to drop the column `usergroupId` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_usergroupId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "usergroupId",
ADD COLUMN     "usergroupid" UUID;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_usergroupid_fkey" FOREIGN KEY ("usergroupid") REFERENCES "UserGroup"("id") ON DELETE SET NULL ON UPDATE CASCADE;
