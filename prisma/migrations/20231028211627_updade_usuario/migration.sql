/*
  Warnings:

  - You are about to drop the column `paciente_id` on the `Usuarios` table. All the data in the column will be lost.
  - You are about to drop the column `profissional_id` on the `Usuarios` table. All the data in the column will be lost.
  - Added the required column `usuario_id` to the `Pacientes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuario_id` to the `Profissional` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Usuarios" DROP CONSTRAINT "Usuarios_paciente_id_fkey";

-- DropForeignKey
ALTER TABLE "Usuarios" DROP CONSTRAINT "Usuarios_profissional_id_fkey";

-- AlterTable
ALTER TABLE "Pacientes" ADD COLUMN     "usuario_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Profissional" ADD COLUMN     "usuario_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Usuarios" DROP COLUMN "paciente_id",
DROP COLUMN "profissional_id";

-- AddForeignKey
ALTER TABLE "Profissional" ADD CONSTRAINT "Profissional_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "Usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pacientes" ADD CONSTRAINT "Pacientes_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "Usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
