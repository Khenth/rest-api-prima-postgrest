-- CreateTable
CREATE TABLE "Menu" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "menu" TEXT NOT NULL,
    "mainmenuId" UUID NOT NULL,
    "status" BOOLEAN DEFAULT true,

    CONSTRAINT "Menu_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Menu_menu_key" ON "Menu"("menu");

-- AddForeignKey
ALTER TABLE "Menu" ADD CONSTRAINT "Menu_mainmenuId_fkey" FOREIGN KEY ("mainmenuId") REFERENCES "MainMenu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
