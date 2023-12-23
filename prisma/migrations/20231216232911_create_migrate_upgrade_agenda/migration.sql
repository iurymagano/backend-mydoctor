/*
  Warnings:

  - You are about to drop the column `date` on the `Dias` table. All the data in the column will be lost.
  - You are about to drop the column `profissional_id` on the `Dias` table. All the data in the column will be lost.
  - You are about to drop the column `profissional_id` on the `Horarios` table. All the data in the column will be lost.
  - You are about to drop the `Agenda` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `domingo` to the `Dias` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quarta` to the `Dias` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quinta` to the `Dias` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sabado` to the `Dias` table without a default value. This is not possible if the table is not empty.
  - Added the required column `segunda` to the `Dias` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sexta` to the `Dias` table without a default value. This is not possible if the table is not empty.
  - Added the required column `terca` to the `Dias` table without a default value. This is not possible if the table is not empty.
  - Added the required column `agendaprofissional_id` to the `Horarios` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Agenda" DROP CONSTRAINT "Agenda_dia_id_fkey";

-- DropForeignKey
ALTER TABLE "Agenda" DROP CONSTRAINT "Agenda_horario_id_fkey";

-- DropForeignKey
ALTER TABLE "Agenda" DROP CONSTRAINT "Agenda_paciente_id_fkey";

-- DropForeignKey
ALTER TABLE "Agenda" DROP CONSTRAINT "Agenda_profissional_id_fkey";

-- DropForeignKey
ALTER TABLE "Dias" DROP CONSTRAINT "Dias_profissional_id_fkey";

-- DropForeignKey
ALTER TABLE "Horarios" DROP CONSTRAINT "Horarios_profissional_id_fkey";

-- AlterTable
ALTER TABLE "Dias" DROP COLUMN "date",
DROP COLUMN "profissional_id",
ADD COLUMN     "domingo" BOOLEAN NOT NULL,
ADD COLUMN     "quarta" BOOLEAN NOT NULL,
ADD COLUMN     "quinta" BOOLEAN NOT NULL,
ADD COLUMN     "sabado" BOOLEAN NOT NULL,
ADD COLUMN     "segunda" BOOLEAN NOT NULL,
ADD COLUMN     "sexta" BOOLEAN NOT NULL,
ADD COLUMN     "terca" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "Horarios" DROP COLUMN "profissional_id",
ADD COLUMN     "agendaprofissional_id" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Agenda";

-- CreateTable
CREATE TABLE "AgendaProfissional" (
    "id" SERIAL NOT NULL,
    "profissional_id" INTEGER NOT NULL,
    "dia_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AgendaProfissional_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AgendaPacientes" (
    "id" SERIAL NOT NULL,
    "profissional_id" INTEGER NOT NULL,
    "paciente_id" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "diaSemana" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "horario_id" INTEGER,

    CONSTRAINT "AgendaPacientes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Horarios" ADD CONSTRAINT "Horarios_agendaprofissional_id_fkey" FOREIGN KEY ("agendaprofissional_id") REFERENCES "AgendaProfissional"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AgendaProfissional" ADD CONSTRAINT "AgendaProfissional_profissional_id_fkey" FOREIGN KEY ("profissional_id") REFERENCES "Profissional"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AgendaProfissional" ADD CONSTRAINT "AgendaProfissional_dia_id_fkey" FOREIGN KEY ("dia_id") REFERENCES "Dias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AgendaPacientes" ADD CONSTRAINT "AgendaPacientes_profissional_id_fkey" FOREIGN KEY ("profissional_id") REFERENCES "Profissional"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AgendaPacientes" ADD CONSTRAINT "AgendaPacientes_paciente_id_fkey" FOREIGN KEY ("paciente_id") REFERENCES "Pacientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AgendaPacientes" ADD CONSTRAINT "AgendaPacientes_horario_id_fkey" FOREIGN KEY ("horario_id") REFERENCES "Horarios"("id") ON DELETE SET NULL ON UPDATE CASCADE;
