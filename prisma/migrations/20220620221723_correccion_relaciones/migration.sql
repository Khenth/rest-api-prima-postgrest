-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_usergroupId_fkey";

-- DropIndex
DROP INDEX "User_usergroupId_key";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "img" DROP NOT NULL,
ALTER COLUMN "usergroupId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_usergroupId_fkey" FOREIGN KEY ("usergroupId") REFERENCES "UserGroup"("id") ON DELETE SET NULL ON UPDATE CASCADE;
