/*
  Warnings:

  - You are about to drop the `TypProfissional` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Profissional" DROP CONSTRAINT "Profissional_typeProfissional_id_fkey";

-- DropTable
DROP TABLE "TypProfissional";

-- CreateTable
CREATE TABLE "TypeProfissional" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TypeProfissional_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Profissional" ADD CONSTRAINT "Profissional_typeProfissional_id_fkey" FOREIGN KEY ("typeProfissional_id") REFERENCES "TypeProfissional"("id") ON DELETE SET NULL ON UPDATE CASCADE;
