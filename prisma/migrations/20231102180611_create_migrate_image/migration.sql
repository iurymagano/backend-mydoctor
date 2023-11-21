/*
  Warnings:

  - You are about to drop the column `image` on the `Pacientes` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `Profissional` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Pacientes" DROP COLUMN "image";

-- AlterTable
ALTER TABLE "Profissional" DROP COLUMN "image";

-- AlterTable
ALTER TABLE "Usuarios" ADD COLUMN     "image" TEXT;
