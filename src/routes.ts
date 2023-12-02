import { Router } from "express";
import { upload } from "./config/multer";
import { CreateUsuarioController } from "./controllers/usuarios/CreateUsuarioController";
import { AuthController } from "./controllers/usuarios/AuthController";
import { isAuthenticated } from "./middlewares/IsAuthticated";
import { ProfissionalController } from "./controllers/profissional/ProfissionalController";
import { UpdateProfissionalController } from "./controllers/profissional/UpdateProfissionalController";
import { CreateProntuariosController } from "./controllers/Prontuarios/CreateProntuariosController";
import { UpdateProntuariosController } from "./controllers/Prontuarios/UpdateProntuariosController";
import { ListaProfissionalController } from "./controllers/Prontuarios/ListaProfissionalController";
import { DeleteProntuariosController } from "./controllers/Prontuarios/DeleteProntuariosController";
import { CreateEnderecosController } from "./controllers/enderecos/CreateEnderecosController";
import { UpdateEnderecosController } from "./controllers/enderecos/UpdateEnderecosController";
import { DeleteEnderecosController } from "./controllers/enderecos/DeleteEnderecosController";
import { GetIDEnderecosController } from "./controllers/enderecos/GetIDEnderecosController";
import { CreateMensagensController } from "./controllers/mensagens/CreateMensagensController";
import { SendEmailController } from "./controllers/sendEmailController/SendEmailController";
import { UploadCloudinaryController } from "./controllers/uploadCloudinary/UploadCloudinaryController";
import { UpdateUsuarioControler } from "./controllers/usuarios/UpdateUsuarioController";
import { UpdatePacientesController } from "./controllers/pacientes/UpdatePacientesController";
import { GetByPacientesController } from "./controllers/pacientes/GetByPacientesController";

const router = Router();

/**------ Usuarios ------- */
router.post("/usuario", new CreateUsuarioController().handle);
router.put("/usuario", isAuthenticated, new UpdateUsuarioControler().handle);

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

/**------ Pacientes ------- */
router.put(
  "/pacientes",
  isAuthenticated,
  new UpdatePacientesController().handle
);
router.post(
  "/search/id/pacientes",
  isAuthenticated,
  new GetByPacientesController().handle
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

/**------ Upload Images ------- */
router.post(
  "/images/upload",
  isAuthenticated,
  upload.single("file"),
  new UploadCloudinaryController().handle
);

export { router };
