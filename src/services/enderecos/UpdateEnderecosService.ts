import prismaClient from "../../prisma";

interface EnderecosRequest {
  id: number;
  rua: string;
  bairro: string;
  cidade: string;
  estado: string;
  pais: string;
  complemento?: string;
  numero?: string;
}

class UpdateEnderecosService {
  async execute({
    id,
    rua,
    bairro,
    cidade,
    estado,
    pais,
    complemento,
    numero,
  }: EnderecosRequest) {
    if (!id) {
      throw new Error("A key id e obrigatoria");
    }
    const enderecos = await prismaClient.enderecos.update({
      where: {
        id,
      },
      data: {
        rua,
        bairro,
        cidade,
        estado,
        pais,
        complemento,
        numero,
      },
    });

    return { respData: enderecos };
  }
}

export { UpdateEnderecosService };
