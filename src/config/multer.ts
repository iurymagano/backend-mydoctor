import multer from "multer";

import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(file, "multer disk");
    cb(null, "src/uploads/");
  },
  filename: (req, file, cb) => {
    console.log(file, "multer filename");
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

export { upload };
