import { Request, Response } from "express";
import { DeleteProntuariosService } from "../../services/Prontuarios/DeleteProntuariosService";

class DeleteProntuariosController {
  async handle(req: Request, res: Response) {
    const prontuarioService = new DeleteProntuariosService();
    const respProntuarios = await prontuarioService.execute(req.body);

    return res.json(respProntuarios);
  }
}

export { DeleteProntuariosController };
