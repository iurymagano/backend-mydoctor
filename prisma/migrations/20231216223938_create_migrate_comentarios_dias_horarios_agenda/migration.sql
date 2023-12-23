-- AlterTable
ALTER TABLE "LikesPacienteProfissional" ADD COLUMN     "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "Dias" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "profissional_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Dias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Horarios" (
    "id" SERIAL NOT NULL,
    "horario" TIMESTAMP(3) NOT NULL,
    "profissional_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Horarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Agenda" (
    "id" SERIAL NOT NULL,
    "paciente_id" INTEGER NOT NULL,
    "profissional_id" INTEGER NOT NULL,
    "dia_id" INTEGER NOT NULL,
    "horario_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Agenda_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comentarios" (
    "id" SERIAL NOT NULL,
    "comentario" TEXT NOT NULL,
    "paciente_id" INTEGER NOT NULL,
    "profissional_id" INTEGER NOT NULL,
    "nota" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Comentarios_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Dias" ADD CONSTRAINT "Dias_profissional_id_fkey" FOREIGN KEY ("profissional_id") REFERENCES "Profissional"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Horarios" ADD CONSTRAINT "Horarios_profissional_id_fkey" FOREIGN KEY ("profissional_id") REFERENCES "Profissional"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Agenda" ADD CONSTRAINT "Agenda_paciente_id_fkey" FOREIGN KEY ("paciente_id") REFERENCES "Pacientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Agenda" ADD CONSTRAINT "Agenda_profissional_id_fkey" FOREIGN KEY ("profissional_id") REFERENCES "Profissional"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Agenda" ADD CONSTRAINT "Agenda_dia_id_fkey" FOREIGN KEY ("dia_id") REFERENCES "Dias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Agenda" ADD CONSTRAINT "Agenda_horario_id_fkey" FOREIGN KEY ("horario_id") REFERENCES "Horarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comentarios" ADD CONSTRAINT "Comentarios_paciente_id_fkey" FOREIGN KEY ("paciente_id") REFERENCES "Pacientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comentarios" ADD CONSTRAINT "Comentarios_profissional_id_fkey" FOREIGN KEY ("profissional_id") REFERENCES "Profissional"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
