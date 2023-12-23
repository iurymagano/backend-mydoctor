import prismaClient from "../../prisma";

type Dias = {
  segunda: boolean;
  terca: boolean;
  quarta: boolean;
  quinta: boolean;
  sexta: boolean;
  sabado: boolean;
  domingo: boolean;
};
type Horarios = {
  horario: string;
  agendaProfissional_id: number;
};

interface AgendaRequest {
  dias: Dias;
  horarios: Horarios[];
  profissional_id: number;
}

class CreateAgendaProfissionalService {
  async execute({ dias, horarios, profissional_id }: AgendaRequest) {
    if (!dias) {
      throw new Error("not found dias");
    }
    if (!horarios) {
      throw new Error("not found horarios");
    }

    const resp = await prismaClient.agendaProfissional.create({
      data: {
        profissional: {
          connect: { id: profissional_id },
        },
        Horarios: {
          createMany: {
            skipDuplicates: true,
            data: horarios,
          },
        },
        dia: {
          create: dias,
        },
      },
      include: {
        Horarios: true,
        dia: true,
      },
    });

    return { respData: { resp } };
  }
}

export { CreateAgendaProfissionalService };
