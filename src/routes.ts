import { Router, Request, Response } from "express";
import { CreateUsuarioController } from "./controllers/usuarios/CreateUsuarioController";
import { AuthController } from "./controllers/usuarios/AuthController";
import { isAuthenticated } from "./middlewares/IsAuthticated";
import { ProfissionalController } from "./controllers/profissional/ProfissionalController";
import { UpdateProfissionalController } from "./controllers/profissional/UpdateProfissionalController";
import { CreateProntuariosController } from "./controllers/Prontuarios/CreateProntuariosController";
import { UpdateProntuariosController } from "./controllers/Prontuarios/UpdateProntuariosController";
import { ListaProfissionalController } from "./controllers/Prontuarios/ListaProfissionalController";
import { DeleteProntuariosController } from "./controllers/Prontuarios/DeleteProntuariosController";
import { CreateEnderecosController } from "./controllers/Enderecos/CreateEnderecosController";
import { UpdateEnderecosController } from "./controllers/Enderecos/UpdateEnderecosController";
import { DeleteEnderecosController } from "./controllers/Enderecos/DeleteEnderecosController";
import { GetIDEnderecosController } from "./controllers/Enderecos/GetIDEnderecosController";
import { CreateMensagensController } from "./controllers/Mensagens/CreateMensagensController";
import { SendEmailController } from "./controllers/SendEmailController/SendEmailController";

const router = Router();

/**------ Usuarios ------- */
router.post("/usuario", new CreateUsuarioController().handle);

/**------ login ------- */
router.post("/login", new AuthController().handle);

/**------ Profissional ------- */
router.get(
  "/profissional",
  isAuthenticated,
  new ProfissionalController().handle
);

router.put(
  "/profissional",
  isAuthenticated,
  new UpdateProfissionalController().handle
);

/**------ Prontuarios ------- */
router.post(
  "/prontuarios",
  isAuthenticated,
  new CreateProntuariosController().handle
);
router.post(
  "/lista/prontuarios",
  isAuthenticated,
  new ListaProfissionalController().handle
);

router.put(
  "/prontuarios",
  isAuthenticated,
  new UpdateProntuariosController().handle
);
router.delete(
  "/prontuarios",
  isAuthenticated,
  new DeleteProntuariosController().handle
);

/**------ Enderecos ------- */
router.post(
  "/enderecos",
  isAuthenticated,
  new CreateEnderecosController().handle
);

router.put(
  "/enderecos",
  isAuthenticated,
  new UpdateEnderecosController().handle
);
router.delete(
  "/enderecos",
  isAuthenticated,
  new DeleteEnderecosController().handle
);
router.post(
  "/id/enderecos",
  isAuthenticated,
  new GetIDEnderecosController().handle
);

/**------ Mensagens ------- */
router.post(
  "/mensagens",
  isAuthenticated,
  new CreateMensagensController().handle
);

/**------ SendEmail ------- */
router.post("/sendemail", isAuthenticated, new SendEmailController().handle);

export { router };
