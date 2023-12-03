import prismaClient from "../../prisma";

interface LikeRequest {
  id: number;
}
class GetLikesPacienteService {
  async execute({ id }: LikeRequest) {
    if (!id) {
      throw new Error("not found id");
    }

    const respLikesPaciente =
      await prismaClient.likesPacienteProfissional.findMany({
        where: {
          paciente_id: id,
        },
      });

    if (!respLikesPaciente) {
      throw new Error("Nenhum like encontrado");
    }

    const ids = respLikesPaciente.map((item) => item.profissional_id);

    const respLike = await prismaClient.profissional.findMany({
      where: {
        id: { in: ids },
      },
    });
    return { respData: respLike };
  }
}

export { GetLikesPacienteService };
