import prismaClient from "../../prisma";

interface LikeRequest {
  profissional_id: number;
  paciente_id: number;
}
class CreateLikePacienteService {
  async execute({ profissional_id, paciente_id }: LikeRequest) {
    if (!profissional_id || !paciente_id) {
      throw new Error("not found profissional_id and paciente_id");
    }

    const isLike = await prismaClient.likesPacienteProfissional.findFirst({
      where: {
        profissional_id,
        paciente_id,
      },
    });

    if (isLike) {
      throw new Error("Paciente já deu um like");
    }

    const respLike = await prismaClient.likesPacienteProfissional.create({
      data: {
        paciente_id,
        profissional_id,
      },
    });
    return { respData: respLike };
  }
}

export { CreateLikePacienteService };
