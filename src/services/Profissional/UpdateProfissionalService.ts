import prismaClient from "../../prisma";

interface Profissional {
  id: number;
  nome: string;
  email: string;
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
    email,
    documento,
    telefone,
    endereco_id,
    usuario_id,
    typeProfissional_id,
  }: Profissional) {
    const profissinal = await prismaClient.profissional.update({
      where: {
        id,
      },
      data: {
        nome,
        email,
        endereco_id,
        documento,
        telefone,
        typeProfissional_id,
      },
    });
    await prismaClient.usuarios.update({
      where: {
        id: usuario_id,
      },
      data: {
        nome,
        email,
      },
    });

    return { respData: profissinal };
  }
}

export { UpdateProfissionalService };
