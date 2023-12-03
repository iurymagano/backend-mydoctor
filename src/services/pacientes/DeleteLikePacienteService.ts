import prismaClient from "../../prisma";

interface LikeRequest {
  profissional_id: number;
  paciente_id: number;
}
class DeleteLikePacienteService {
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

    if (!isLike) {
      throw new Error("Nenhum like encontrado");
    }

    await prismaClient.likesPacienteProfissional.delete({
      where: {
        id: isLike.id,
      },
    });

    return { respData: "Deletado com sucesso" };
  }
}

export { DeleteLikePacienteService };
