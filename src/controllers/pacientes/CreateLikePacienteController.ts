import { Request, Response } from "express";
import { CreateLikePacienteService } from "../../services/pacientes/CreateLikePacienteService";

class CreateLikePacienteController {
  async handle(req: Request, res: Response) {
    const { profissional_id, paciente_id } = req.body;

    const pacienteService = new CreateLikePacienteService();

    const paciente = await pacienteService.execute({
      profissional_id,
      paciente_id,
    });

    return res.json(paciente);
  }
}

export { CreateLikePacienteController };
