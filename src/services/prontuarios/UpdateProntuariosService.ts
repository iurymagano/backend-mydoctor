import prismaClient from "../../prisma";

interface ProntuariosRequest {
  descricao: string;
  status: string;
  id: number;
}

class UpdateProntuariosService {
  async execute({ id, descricao, status }: ProntuariosRequest) {
    if (!id) {
      throw new Error("A key id e obrigatoria");
    }
    const getProntuarioID = await prismaClient.prontuarios.findFirst({
      where: {
        id,
      },
    });

    if (!getProntuarioID) {
      throw new Error("Nao existente o id.");
    }

    const prontuario = await prismaClient.prontuarios.update({
      where: {
        id,
      },
      data: {
        descricao,
        status,
      },
    });

    return { respData: prontuario };
  }
}

export { UpdateProntuariosService };
