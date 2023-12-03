import { Router } from "express";
import { upload } from "./config/multer";
import { CreateUsuarioController } from "../src/controllers/usuarios/CreateUsuarioController";
import { UpdateUsuarioControler } from "../src/controllers/usuarios/UpdateUsuarioController";
import { isAuthenticated } from "../src/middlewares/IsAuthticated";
import { AuthController } from "../src/controllers/usuarios/AuthController";
import { GetProfissionalController } from "../src/controllers/profissional/ListaProfissionalController";
import { UpdateProfissionalController } from "../src/controllers/profissional/UpdateProfissionalController";
import { UpdatePacientesController } from "../src/controllers/pacientes/UpdatePacientesController";
import { GetByPacientesController } from "../src/controllers/pacientes/GetByPacientesController";
import { GetLikesPacienteController } from "../src/controllers/pacientes/GetLikesPacienteController";
import { CreateLikePacienteController } from "../src/controllers/pacientes/CreateLikePacienteController";
import { DeleteLikePacienteController } from "../src/controllers/pacientes/DeleteLikePacienteController";
import { CreateProntuariosController } from "../src/controllers/prontuarios/CreateProntuariosController";
import { ListaProntuarioController } from "../src/controllers/prontuarios/ListaProntuarioController";
import { UpdateProntuariosController } from "../src/controllers/prontuarios/UpdateProntuariosController";
import { DeleteProntuariosController } from "../src/controllers/prontuarios/DeleteProntuariosController";
import { CreateEnderecosController } from "../src/controllers/enderecos/CreateEnderecosController";
import { UpdateEnderecosController } from "../src/controllers/enderecos/UpdateEnderecosController";
import { DeleteEnderecosController } from "../src/controllers/enderecos/DeleteEnderecosController";
import { GetIDEnderecosController } from "../src/controllers/enderecos/GetIDEnderecosController";
import { CreateMensagensController } from "../src/controllers/mensagens/CreateMensagensController";
import { SendEmailController } from "../src/controllers/sendEmailController/SendEmailController";
import { UploadCloudinaryController } from "../src/controllers/uploadCloudinary/UploadCloudinaryController";

const router = Router();

/**------ Usuarios ------- */
router.post("/usuario", new CreateUsuarioController().handle);
router.put("/usuario", isAuthenticated, new UpdateUsuarioControler().handle);

/**------ login ------- */
router.post("/login", new AuthController().handle);

/**------ Profissional ------- */
router.post(
  "/search/profissional",
  isAuthenticated,
  new GetProfissionalController().handle
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

router.post(
  "/search/like/pacientes",
  isAuthenticated,
  new GetLikesPacienteController().handle
);

router.post(
  "/like/pacientes",
  isAuthenticated,
  new CreateLikePacienteController().handle
);

router.delete(
  "/like/pacientes",
  isAuthenticated,
  new DeleteLikePacienteController().handle
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
  new ListaProntuarioController().handle
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
