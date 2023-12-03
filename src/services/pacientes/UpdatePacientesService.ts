import prismaClient from "../../prisma";

interface Pacientes {
  id: number;
  nome?: string;
  email?: string;
  image?: string;
  documento?: string;
  telefone?: string;
  endereco_id?: number;
}

class UpdatePacientesService {
  async execute({
    id,
    nome,
    image,
    email,
    documento,
    telefone,
    endereco_id,
  }: Pacientes) {
    const keys: Pacientes = {
      id,
      nome,
      image,
      email,
      documento,
      telefone,
      endereco_id,
    };

    if (!id) {
      throw new Error('Not found key id')
    }

    const data = {};

    Object.keys(keys).forEach((key) => {
      if (keys[key]) {
        data[key] = keys[key];
      }
    });

    const existPaciente = await prismaClient.pacientes.findFirst({
      where: {
        id,
      },
    });

    if (!existPaciente) {
      throw new Error("Profissional nao encontrado");
    }

    const profissinal = await prismaClient.pacientes.update({
      where: {
        id,
      },
      data,
    });

    return { respData: profissinal };
  }
}

export { UpdatePacientesService };
