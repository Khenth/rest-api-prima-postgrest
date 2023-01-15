-- CreateTable
CREATE TABLE "SubMenu" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "title" TEXT NOT NULL,
    "route" TEXT,
    "icon" TEXT NOT NULL,
    "detail" TEXT NOT NULL,
    "menuId" UUID NOT NULL,
    "status" BOOLEAN DEFAULT true,

    CONSTRAINT "SubMenu_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SubMenu_title_key" ON "SubMenu"("title");

-- CreateIndex
CREATE UNIQUE INDEX "SubMenu_route_key" ON "SubMenu"("route");

-- CreateIndex
CREATE UNIQUE INDEX "SubMenu_icon_key" ON "SubMenu"("icon");

-- CreateIndex
CREATE UNIQUE INDEX "SubMenu_detail_key" ON "SubMenu"("detail");

-- AddForeignKey
ALTER TABLE "SubMenu" ADD CONSTRAINT "SubMenu_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "Menu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
