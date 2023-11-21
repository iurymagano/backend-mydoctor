import prismaClient from "../../prisma";

interface ProntuariosRequest {
  ids: number[];
}

class DeleteProntuariosService {
  async execute({ ids }: ProntuariosRequest) {
    if (!ids) {
      throw new Error("O id é obrigatória");
    }

    await prismaClient.conProfissionalPacientes.deleteMany({
      where: {
        prontuario_id: {
          in: ids,
        },
      },
    });

    const prontuario = await prismaClient.prontuarios.deleteMany({
      where: {
        id: {
          in: ids,
        },
      },
    });

    return { respData: prontuario };
  }
}

export { DeleteProntuariosService };
