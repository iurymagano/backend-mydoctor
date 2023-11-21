-- AlterTable
ALTER TABLE "Profissional" ADD COLUMN     "typeProfissional_id" INTEGER;

-- CreateTable
CREATE TABLE "TypProfissional" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TypProfissional_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Profissional" ADD CONSTRAINT "Profissional_typeProfissional_id_fkey" FOREIGN KEY ("typeProfissional_id") REFERENCES "TypProfissional"("id") ON DELETE SET NULL ON UPDATE CASCADE;
