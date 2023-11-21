import { Request, Response } from "express";
import { CreateProntuariosService } from "../../services/Prontuarios/CreateProntuariosService";

class CreateProntuariosController {
  async handle(req: Request, res: Response) {
    const prontuarioService = new CreateProntuariosService();
    const respProntuarios = await prontuarioService.execute(req.body);

    return res.json(respProntuarios);
  }
}

export { CreateProntuariosController };
