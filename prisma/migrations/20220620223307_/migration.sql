/*
  Warnings:

  - You are about to drop the column `usergroupid` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_usergroupid_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "usergroupid",
ADD COLUMN     "usergroupId" UUID;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_usergroupId_fkey" FOREIGN KEY ("usergroupId") REFERENCES "UserGroup"("id") ON DELETE SET NULL ON UPDATE CASCADE;
