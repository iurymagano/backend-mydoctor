/*
  Warnings:

  - You are about to drop the column `typeRemetente` on the `Mensagens` table. All the data in the column will be lost.
  - Added the required column `usuarioID` to the `Mensagens` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Mensagens" DROP COLUMN "typeRemetente",
ADD COLUMN     "usuarioID" INTEGER NOT NULL;
