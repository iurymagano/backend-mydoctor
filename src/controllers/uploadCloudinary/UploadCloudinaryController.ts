import { Request, Response } from "express";
import { UploadCloudinaryService } from "../../services/uploadCloudinary/UploadCloudinaryService";

class UploadCloudinaryController {
  async handle(req: Request, res: Response) {
    const { file } = req;
    const { publicID } = req.body;

    const uploadService = new UploadCloudinaryService();
    const upload = await uploadService.execute({
      fileBuffer: file.buffer,
      publicID,
    });

    return res.json(upload);
  }
}

export { UploadCloudinaryController };
