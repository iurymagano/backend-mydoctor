import prismaClient from "../../prisma";

interface PacienteRequest {
  id: number;
}

class GetByPacienteService {
  async execute({ id }) {
    if (!id) {
      throw new Error("É obrigátório a chave id");
    }

    const paciente = await prismaClient.pacientes.findFirst({
      where: { id },
    });

    if (!paciente) {
      throw new Error("Nenhum paciente encontrado");
    }

    return { respData: paciente };
  }
}

export { GetByPacienteService };
