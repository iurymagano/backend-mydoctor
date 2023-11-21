/*
  Warnings:

  - You are about to drop the column `usuario_id` on the `Pacientes` table. All the data in the column will be lost.
  - You are about to drop the column `usuario_id` on the `Profissional` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Pacientes" DROP COLUMN "usuario_id";

-- AlterTable
ALTER TABLE "Profissional" DROP COLUMN "usuario_id";
