import { Request, Response } from "express";
import { CreateUsuarioService } from "../../services/usuarios/CreateUsuarioService";

class CreateUsuarioController {
  async handle(req: Request, res: Response) {
    const { nome, email, password, typeUser } = req.body;
    const createUsuarioservice = new CreateUsuarioService();

    const user = await createUsuarioservice.execute({
      nome,
      email,
      password,
      typeUser,
    });

    return res.json(user);
  }
}

export { CreateUsuarioController };
