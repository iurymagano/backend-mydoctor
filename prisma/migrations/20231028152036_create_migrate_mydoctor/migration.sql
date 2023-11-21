-- CreateEnum
CREATE TYPE "TypeUser" AS ENUM ('PACIENTE', 'PROFISSIONAL');

-- CreateTable
CREATE TABLE "Usuarios" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "typeUser" "TypeUser" NOT NULL,
    "profissional_id" INTEGER,
    "paciente_id" INTEGER,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profissional" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "documento" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "usuario_id" INTEGER NOT NULL,
    "endereco_id" INTEGER,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Profissional_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pacientes" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "documento" TEXT,
    "telefone" TEXT,
    "estadoCivil" TEXT,
    "sexo" TEXT,
    "usuario_id" INTEGER NOT NULL,
    "endereco_id" INTEGER,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Pacientes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConProfissionalPacientes" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "profissional_id" INTEGER NOT NULL,
    "paciente_id" INTEGER NOT NULL,
    "prontuario_id" INTEGER NOT NULL,

    CONSTRAINT "ConProfissionalPacientes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Enderecos" (
    "id" SERIAL NOT NULL,
    "rua" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "pais" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Enderecos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Prontuarios" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "horario" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Prontuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mensagens" (
    "id" SERIAL NOT NULL,
    "conteudo" TEXT NOT NULL,
    "profissional_id" INTEGER NOT NULL,
    "paciente_id" INTEGER NOT NULL,
    "remetenteID" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Mensagens_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_email_key" ON "Usuarios"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Profissional_email_key" ON "Profissional"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Profissional_documento_key" ON "Profissional"("documento");

-- CreateIndex
CREATE UNIQUE INDEX "Profissional_endereco_id_key" ON "Profissional"("endereco_id");

-- CreateIndex
CREATE UNIQUE INDEX "Pacientes_email_key" ON "Pacientes"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Pacientes_documento_key" ON "Pacientes"("documento");

-- CreateIndex
CREATE UNIQUE INDEX "Pacientes_endereco_id_key" ON "Pacientes"("endereco_id");

-- CreateIndex
CREATE UNIQUE INDEX "ConProfissionalPacientes_prontuario_id_key" ON "ConProfissionalPacientes"("prontuario_id");

-- AddForeignKey
ALTER TABLE "Usuarios" ADD CONSTRAINT "Usuarios_profissional_id_fkey" FOREIGN KEY ("profissional_id") REFERENCES "Profissional"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Usuarios" ADD CONSTRAINT "Usuarios_paciente_id_fkey" FOREIGN KEY ("paciente_id") REFERENCES "Pacientes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profissional" ADD CONSTRAINT "Profissional_endereco_id_fkey" FOREIGN KEY ("endereco_id") REFERENCES "Enderecos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pacientes" ADD CONSTRAINT "Pacientes_endereco_id_fkey" FOREIGN KEY ("endereco_id") REFERENCES "Enderecos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConProfissionalPacientes" ADD CONSTRAINT "ConProfissionalPacientes_profissional_id_fkey" FOREIGN KEY ("profissional_id") REFERENCES "Profissional"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConProfissionalPacientes" ADD CONSTRAINT "ConProfissionalPacientes_paciente_id_fkey" FOREIGN KEY ("paciente_id") REFERENCES "Pacientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConProfissionalPacientes" ADD CONSTRAINT "ConProfissionalPacientes_prontuario_id_fkey" FOREIGN KEY ("prontuario_id") REFERENCES "Prontuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mensagens" ADD CONSTRAINT "Mensagens_profissional_id_fkey" FOREIGN KEY ("profissional_id") REFERENCES "Profissional"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mensagens" ADD CONSTRAINT "Mensagens_paciente_id_fkey" FOREIGN KEY ("paciente_id") REFERENCES "Pacientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
