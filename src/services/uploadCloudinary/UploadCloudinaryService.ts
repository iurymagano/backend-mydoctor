import { cloudinary } from "../../utils/cloudinary";
import fs from "fs";

interface UploadCloudinaryRequest {
  file: any;
  publicID?: string;
}

class UploadCloudinaryService {
  async execute({ file, publicID }: UploadCloudinaryRequest) {
    console.log(file, "testeeeeee file");
    if (!file) {
      throw new Error("File não existente");
    }
    const image = file.path;

    const result = await cloudinary.uploader.upload(image, {
      public_id: publicID,
    });
    if (!result) {
      throw new Error("Não foi possível realizar o upload da image.");
    }

    const resp = fs.promises
      .unlink(image)
      .then(() => {
        console.log("Arquivo excluído com sucesso.");
      })
      .catch((err) => {
        console.error("Erro ao excluir o arquivo:", err);
      });

    // Aguarde a execução da promise antes de retornar
    await resp;

    return result;
  }
}

export { UploadCloudinaryService };
