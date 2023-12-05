import prismaClient from "../../prisma";

interface ListaProfissionalRequest {
  skip: number;
  take: number;
}

class ListaProfissionalService {
  async execute({ skip, take }: ListaProfissionalRequest) {
    const defSkip = Number(skip) || 1;
    const defTake = Number(take) || 10;

    const [profissionais, total] = await prismaClient.$transaction([
      prismaClient.profissional.findMany({
        include: {
          typeProfissional: true,
        },
        skip: defSkip,
        take: defTake,
      }),
      prismaClient.profissional.count(),
    ]);

    const totalPage = Math.ceil(total / defTake);

    return { respData: { total, totalPage, profissionais } };
  }
}
export { ListaProfissionalService };
