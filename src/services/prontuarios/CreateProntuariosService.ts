import prismaClient from "../../prisma";

interface ProntuariosRequest {
  descricao: string;
  status: string;
  paciente_id: number;
  profissional_id: number;
}

class CreateProntuariosService {
  async execute({
    descricao,
    status,
    paciente_id,
    profissional_id,
  }: ProntuariosRequest) {
    if (!descricao) {
      throw new Error("A descrição é obrigatória");
    }

    if (!status) {
      throw new Error("O status é obrigatório");
    }

    if (!paciente_id) {
      throw new Error("O ID do paciente é obrigatório");
    }

    if (!profissional_id) {
      throw new Error("O ID do profissional é obrigatório");
    }

    const prontuario = await prismaClient.prontuarios.create({
      data: {
        descricao,
        status,
      },
    });
    const { id } = prontuario;

    await prismaClient.conProfissionalPacientes.create({
      data: {
        paciente_id,
        profissional_id,
        prontuario_id: id,
      },
    });

    return { respData: prontuario };
  }
}

export { CreateProntuariosService };
