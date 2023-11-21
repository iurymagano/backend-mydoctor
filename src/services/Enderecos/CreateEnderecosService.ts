import prismaClient from "../../prisma";

interface EnderecosRequest {
  rua: string;
  bairro: string;
  cidade: string;
  estado: string;
  pais: string;
  complemento?: string;
  numero?: string;
}

class CreateEnderecosService {
  async execute({
    rua,
    bairro,
    cidade,
    estado,
    pais,
    complemento,
    numero,
  }: EnderecosRequest) {
    if (!rua) {
      throw new Error("A key rua e obrigatoria");
    }
    if (!bairro) {
      throw new Error("O key bairro e obrigatoria");
    }
    if (!cidade) {
      throw new Error("A cidade rua e obrigatoria");
    }
    if (!estado) {
      throw new Error("O estado rua e obrigatoria");
    }
    if (!pais) {
      throw new Error("O pais rua e obrigatoria");
    }

    const enderecos = await prismaClient.enderecos.create({
      data: {
        rua,
        bairro,
        cidade,
        estado,
        pais,
        complemento: complemento || "",
        numero: numero || "",
      },
    });

    return { respData: enderecos };
  }
}

export { CreateEnderecosService };
