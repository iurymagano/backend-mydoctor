import prismaClient from "../../prisma";

interface EnderecosRequest {
  id: number;
}

class DeleteEnderecosService {
  async execute({ id }: EnderecosRequest) {
    if (!id) {
      throw new Error("A key id e obrigatoria");
    }

    const enderecos = await prismaClient.enderecos.delete({
      where: {
        id,
      },
    });

    return { respData: enderecos };
  }
}

export { DeleteEnderecosService };
