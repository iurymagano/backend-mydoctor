import { Request, Response } from "express";
import { UploadCloudinaryService } from "../../services/UploadCloudinary/UploadCloudinaryService";

class UploadCloudinaryController {
  async handle(req: Request, res: Response) {
    const { file } = req;
    const { publicID } = req.body;
    const uploadService = new UploadCloudinaryService();
    const upload = await uploadService.execute({
      file,
      publicID,
    });

    return res.json(upload);
  }
}

export { UploadCloudinaryController };
