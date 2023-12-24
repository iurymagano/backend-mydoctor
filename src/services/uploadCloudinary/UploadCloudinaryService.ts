import { cloudinary } from "../../utils/cloudinary";
import { Stream } from "stream";

interface UploadCloudinaryRequest {
  fileBuffer: Buffer;
  publicID?: string;
}

class UploadCloudinaryService {
  async execute({ fileBuffer, publicID }: UploadCloudinaryRequest) {
    if (!fileBuffer || fileBuffer.length === 0) {
      throw new Error("File não existente");
    }

    const bufferStream = new Stream.PassThrough();
    bufferStream.end(fileBuffer);

    const result = await new Promise((resolve, reject) => {
      bufferStream.pipe(
        cloudinary.uploader.upload_stream(
          { public_id: publicID },
          (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result);
            }
          }
        )
      );
    });

    return result;
  }
}

export { UploadCloudinaryService };
