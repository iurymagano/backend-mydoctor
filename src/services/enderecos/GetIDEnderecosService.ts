import prismaClient from "../../prisma";

interface EnderecosRequest {
  id: number;
}

class GetIDEnderecosService {
  async execute({ id }: EnderecosRequest) {
    if (!id) {
      throw new Error("A key id e obrigatoria");
    }
    const enderecos = await prismaClient.enderecos.findFirst({
      where: {
        id,
      },
    });

    return { respData: enderecos };
  }
}

export { GetIDEnderecosService };
