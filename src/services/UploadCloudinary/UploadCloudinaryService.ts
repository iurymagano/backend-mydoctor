import { cloudinary } from "../../utils/cloudinary";
import fs from "fs";

interface UploadCloudinaryRequest {
  file: any;
  publicID?: string;
}

class UploadCloudinaryService {
  async execute({ file, publicID }: UploadCloudinaryRequest) {
    console.log(file, "service");
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

    fs.unlink(image, (err) => {
      if (err) {
        console.log(err);
      }
    });

    return result;
  }
}

export { UploadCloudinaryService };
