import { Request, Response } from "express";
import { UpdateProfissionalService } from "../../services/Profissional/UpdateProfissionalService";

class UpdateProfissionalController {
  async handle(req: Request, res: Response) {
    const {
      id,
      nome,
      email,
      telefone,
      endereco_id,
      documento,
      usuario_id,
      typeProfissional_id,
    } = req.body;

    const updateProfissionalService = new UpdateProfissionalService();

    const list = await updateProfissionalService.execute({
      id,
      nome,
      email,
      telefone,
      endereco_id,
      documento,
      usuario_id,
      typeProfissional_id,
    });

    return res.json(list);
  }
}

export { UpdateProfissionalController };
