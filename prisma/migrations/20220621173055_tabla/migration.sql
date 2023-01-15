/*
  Warnings:

  - You are about to drop the `AuthMenu` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "AuthMenu" DROP CONSTRAINT "AuthMenu_submenuId_fkey";

-- DropForeignKey
ALTER TABLE "AuthMenu" DROP CONSTRAINT "AuthMenu_usergroupId_fkey";

-- DropTable
DROP TABLE "AuthMenu";

-- CreateTable
CREATE TABLE "UserGroupMenu" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "submenuId" UUID NOT NULL,
    "usergroupId" UUID NOT NULL,
    "status" BOOLEAN DEFAULT true,

    CONSTRAINT "UserGroupMenu_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserGroupMenu" ADD CONSTRAINT "UserGroupMenu_usergroupId_fkey" FOREIGN KEY ("usergroupId") REFERENCES "UserGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserGroupMenu" ADD CONSTRAINT "UserGroupMenu_submenuId_fkey" FOREIGN KEY ("submenuId") REFERENCES "SubMenu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
