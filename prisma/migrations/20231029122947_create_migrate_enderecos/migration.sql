/*
  Warnings:

  - Made the column `complemento` on table `Enderecos` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Enderecos" ALTER COLUMN "complemento" SET NOT NULL;
