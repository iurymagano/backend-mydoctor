import prismaClient from "../../prisma";

interface Profissional {
  nome: string;
  email: string;
  usuario_id?: number;
}

class CreateProfissionalService {
  async execute({ nome, email, usuario_id }: Profissional) {
    const profissional = await prismaClient.profissional.create({
      data: {
        nome,
        email,
        usuario_id,
      },
    });

    return { respData: profissional };
  }
}

export { CreateProfissionalService };
