import prismaClient from "../../prisma";

interface PacientesRequest {
  nome: string;
  email: string;
  documento?: string;
  telefone?: string;
  endereco_id?: number;
  usuario_id?: number;
}

class CreatePacientesService {
  async execute({
    nome,
    email,
    documento,
    telefone,
    endereco_id,
    usuario_id,
  }: PacientesRequest) {
    if (!email) {
      throw new Error("Email é Obrigátorio");
    }
    if (!nome) {
      throw new Error("Nome é Obrigátorio");
    }

    const PacientesAldeadyExist = await prismaClient.pacientes.findFirst({
      where: {
        email,
      },
    });

    if (PacientesAldeadyExist) {
      throw new Error("Email já existente.");
    }

    const Pacientes = await prismaClient.pacientes.create({
      data: {
        nome,
        email,
        endereco_id,
        documento,
        telefone,
        usuario_id,
      },
    });

    return { respData: Pacientes };
  }
}

export { CreatePacientesService };
