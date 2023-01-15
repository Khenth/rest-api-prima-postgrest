/*
  Warnings:

  - A unique constraint covering the columns `[usergroupId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `usergroupId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "usergroupId" UUID NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_usergroupId_key" ON "User"("usergroupId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_usergroupId_fkey" FOREIGN KEY ("usergroupId") REFERENCES "UserGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
