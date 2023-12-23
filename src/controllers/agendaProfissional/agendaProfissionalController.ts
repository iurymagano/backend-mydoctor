import { Request, Response } from "express";
import { CreateAgendaProfissionalService } from "../../services/agendaProfissional/CreateAgendaProfissionalService";

class CreateAgendaProfissionalController {
  async handle(req: Request, res: Response) {
    const { dias, horarios, profissional_id } = req.body;

    const controler = new CreateAgendaProfissionalService();

    const resp = await controler.execute({
      dias,
      horarios,
      profissional_id,
    });

    return res.json(resp);
  }
}

export { CreateAgendaProfissionalController };
