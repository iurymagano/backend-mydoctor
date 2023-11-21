import { Request, Response } from "express";
import { ListaProntuariosService } from "../../services/Prontuarios/ListaProntuariosService";

class ListaProfissionalController {
  async handle(req: Request, res: Response) {
    const body = req.body;

    const controller = new ListaProntuariosService();

    const list = await controller.execute(body);

    return res.json(list);
  }
}

export { ListaProfissionalController };
