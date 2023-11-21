import { Request, Response } from "express";
import { ListaProfissionalService } from "../../services/Profissional/ListaProfissionalService";
class ProfissionalController {
  async handle(req: Request, res: Response) {
    const listProfissionalService = new ListaProfissionalService();

    const list = await listProfissionalService.execute();

    return res.json(list);
  }
}

export { ProfissionalController };
