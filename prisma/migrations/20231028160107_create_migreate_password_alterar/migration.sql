/*
  Warnings:

  - Made the column `password` on table `Usuarios` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Usuarios" ALTER COLUMN "password" SET NOT NULL,
ALTER COLUMN "password" SET DEFAULT '';
