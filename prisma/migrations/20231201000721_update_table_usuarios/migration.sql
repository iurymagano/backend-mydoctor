/*
  Warnings:

  - You are about to drop the column `image` on the `Usuarios` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `Usuarios` table. All the data in the column will be lost.
  - Added the required column `image` to the `Profissional` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Profissional" ADD COLUMN     "image" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Usuarios" DROP COLUMN "image",
DROP COLUMN "nome";
