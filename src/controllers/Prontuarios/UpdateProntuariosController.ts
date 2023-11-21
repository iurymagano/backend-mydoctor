import { Request, Response } from "express";
import { UpdateProntuariosService } from "../../services/Prontuarios/UpdateProntuariosService";

class UpdateProntuariosController {
  async handle(req: Request, res: Response) {
    const prontuarioService = new UpdateProntuariosService();
    const respProntuarios = await prontuarioService.execute(req.body);

    return res.json(respProntuarios);
  }
}

export { UpdateProntuariosController };
