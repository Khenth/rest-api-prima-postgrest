-- CreateTable
CREATE TABLE "MainMenu" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "mainmenu" TEXT NOT NULL,
    "route" TEXT,
    "icon" TEXT,
    "status" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "MainMenu_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MainMenu_mainmenu_key" ON "MainMenu"("mainmenu");
