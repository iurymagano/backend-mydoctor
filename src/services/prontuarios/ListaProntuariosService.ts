import prismaClient from "../../prisma";

interface ProntuariosRequest {
  profissional_id: number;
  paciente_id: number;
}

class ListaProntuariosService {
  async execute({ profissional_id, paciente_id }: ProntuariosRequest) {
    if (!profissional_id) {
      throw new Error("A profissional_id é obrigatória");
    }
    if (!paciente_id) {
      throw new Error("A paciente_id é obrigatória");
    }

    const prontuarios = await prismaClient.prontuarios.findMany({
      where: {
        conProfissionalPacientes: {
          some: {
            profissional_id: profissional_id,
            paciente_id: paciente_id,
          },
        },
      },
    });

    return { respData: prontuarios };
  }
}

export { ListaProntuariosService };
