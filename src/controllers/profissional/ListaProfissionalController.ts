import { Request, Response } from "express";
import { ListaProfissionalService } from "../../services/profissional/ListaProfissionalService";
class GetProfissionalController {
  async handle(req: Request, res: Response) {
    const { skip, take } = req.body;

    const listProfissionalService = new ListaProfissionalService();

    const list = await listProfissionalService.execute({ skip, take });

    return res.json(list);
  }
}

export { GetProfissionalController };
