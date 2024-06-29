-- CreateTable
CREATE TABLE "PostTable" (
    "id" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "like" INTEGER NOT NULL,
    "unlike" INTEGER NOT NULL,
    "User" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PostTable_pkey" PRIMARY KEY ("id")
);
