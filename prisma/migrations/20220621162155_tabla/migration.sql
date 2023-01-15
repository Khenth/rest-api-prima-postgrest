-- CreateTable
CREATE TABLE "AuthMenu" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "submenuId" UUID NOT NULL,
    "usergroupId" UUID NOT NULL,
    "status" BOOLEAN DEFAULT true,

    CONSTRAINT "AuthMenu_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AuthMenu" ADD CONSTRAINT "AuthMenu_usergroupId_fkey" FOREIGN KEY ("usergroupId") REFERENCES "UserGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AuthMenu" ADD CONSTRAINT "AuthMenu_submenuId_fkey" FOREIGN KEY ("submenuId") REFERENCES "SubMenu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
