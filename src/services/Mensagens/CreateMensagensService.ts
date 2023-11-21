import prismaClient from "../../prisma";

interface MensagensRequest {
  conteudo: string;
  profissional_id: number;
  paciente_id: number;
  usuarioID: number;
}

class CreateMensagensService {
  async execute({
    conteudo,
    profissional_id,
    paciente_id,
    usuarioID,
  }: MensagensRequest) {
    if (!conteudo) {
      throw new Error("A key conteudo e obrigatoria");
    }
    if (!profissional_id) {
      throw new Error("O key profissional_id e obrigatoria");
    }
    if (!paciente_id) {
      throw new Error("A paciente_id rua e obrigatoria");
    }
    if (!usuarioID) {
      throw new Error("O usuarioID rua e obrigatoria");
    }

    const Mensagens = await prismaClient.mensagens.create({
      data: {
        conteudo,
        profissional_id,
        paciente_id,
        usuarioID,
      },
    });

    return { respData: Mensagens };
  }
}

export { CreateMensagensService };
