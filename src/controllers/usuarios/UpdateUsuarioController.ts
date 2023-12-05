import { Request, Response } from "express";
import { UpdateUsuarioService } from "../../services/usuarios/UpdateUsuarioService";

class UpdateUsuarioControler {
  async handle(req: Request, res: Response) {
    const { id, nome, typeUser, image } = req.body;

    const updateService = new UpdateUsuarioService();

    const respUpdate = await updateService.execute({
      id,
      nome,
      typeUser,
      image,
    });

    return res.json(respUpdate);
  }
}

export { UpdateUsuarioControler };
