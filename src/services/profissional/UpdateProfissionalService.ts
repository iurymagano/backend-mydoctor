import prismaClient from "../../prisma";

interface Profissional {
  id: number;
  nome?: string;
  email?: string;
  image?: string;
  documento?: string;
  telefone?: string;
  endereco_id?: number;
  usuario_id?: number;
  typeProfissional_id?: number;
}

class UpdateProfissionalService {
  async execute({
    id,
    nome,
    image,
    email,
    documento,
    telefone,
    endereco_id,
    typeProfissional_id,
  }: Profissional) {
    const keys: Profissional = {
      id,
      nome,
      image,
      email,
      documento,
      telefone,
      endereco_id,
      typeProfissional_id,
    };

    const data = {};

    Object.keys(keys).forEach((key) => {
      if (keys[key]) {
        data[key] = keys[key];
      }
    });

    const existProf = await prismaClient.profissional.findFirst({
      where: {
        id,
      },
    });

    if (!existProf) {
      throw new Error("Profissional nao encontrado");
    }

    const profissinal = await prismaClient.profissional.update({
      where: {
        id,
      },
      data,
    });

    return { respData: profissinal };
  }
}

export { UpdateProfissionalService };
