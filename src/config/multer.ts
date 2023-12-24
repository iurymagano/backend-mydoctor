import multer from "multer";
import fs from "fs";

import path from "path";

const destinationPath = "./src/uploadsd";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(file, "multer disk");
    cb(null, destinationPath);

    if (!fs.existsSync(destinationPath)) {
      // Se não existe, cria o diretório
      fs.mkdirSync(destinationPath);
    }
  },
  filename: (req, file, cb) => {
    console.log(file, "multer filename");
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

export { upload };
