import prismaClient from "../../prisma";

interface UsuariosRequest {
  id: number;
  typeUser: string;
  image?: string;
  nome?: string;
}

interface UsuariosData {
  image?: string;
  nome?: string;
}

class UpdateUsuarioService {
  async execute({ id, image, nome, typeUser }: UsuariosRequest) {
    const data: UsuariosData = {};

    if (image) {
      data.image = image;
    }

    if (nome) {
      data.nome = nome;
    }

    if (!typeUser) {
      throw new Error("required typeUser");
    }

    const existingUser = await prismaClient.usuarios.findFirst({
      where: {
        id,
      },
    });
    if (!existingUser) {
      throw new Error("Usuario nao encontrado");
    }

    const typeTable =
      typeUser === "PROFISSIONAL" ? "profissional" : "pacientes";

    const respUpdateUsuarios = await prismaClient.usuarios.update({
      where: {
        id,
      },
      data,
      select: {
        id: true,
        image: true,
        email: true,
        nome: true,
        typeUser: true,
        [typeTable]: true,
      },
    });

    const existingType = await (prismaClient[typeTable] as any).findFirst({
      where: {
        usuario_id: id,
      },
    });

    if (!existingType) {
      throw new Error(`${typeTable} nao encontrado`);
    }

    await (prismaClient[typeTable] as any).update({
      where: {
        usuario_id: id,
      },
      data,
    });
    console.log(respUpdateUsuarios);
    return respUpdateUsuarios;

    // console.log(respUpdate);
  }
}

export { UpdateUsuarioService };
