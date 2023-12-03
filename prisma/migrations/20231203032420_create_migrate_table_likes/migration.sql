-- CreateTable
CREATE TABLE "LikesPacienteProfissional" (
    "id" SERIAL NOT NULL,
    "profissional_id" INTEGER NOT NULL,
    "paciente_id" INTEGER NOT NULL,

    CONSTRAINT "LikesPacienteProfissional_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "LikesPacienteProfissional" ADD CONSTRAINT "LikesPacienteProfissional_profissional_id_fkey" FOREIGN KEY ("profissional_id") REFERENCES "Profissional"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LikesPacienteProfissional" ADD CONSTRAINT "LikesPacienteProfissional_paciente_id_fkey" FOREIGN KEY ("paciente_id") REFERENCES "Pacientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
