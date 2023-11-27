import prismaClient from "../../prisma";

class ListaProfissionalService {
  async execute() {
    const profissional = await prismaClient.profissional.findMany({
      include: {
        typeProfissional: true,
      },
    });
    return { respData: profissional };
  }
}
export { ListaProfissionalService };
