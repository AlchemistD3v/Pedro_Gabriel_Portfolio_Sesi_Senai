import multer from "multer";
import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";
import { randomUUID } from "node:crypto";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pastaUploads = path.resolve(__dirname, "../../uploads");

fs.mkdirSync(pastaUploads, { recursive: true });

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, pastaUploads);
  },

  filename: (req, file, cb) => {
    const extensao = path.extname(file.originalname).toLowerCase();

    cb(null, `${randomUUID()}${extensao}`);
  },
});

// Aceita foto e vídeo.
function filtrarArquivo(req, file, cb) {
  if (file.mimetype.startsWith("image/") || file.mimetype.startsWith("video/")) {
    cb(null, true);
  } else {
    cb(new Error("Envie apenas imagem ou vídeo."));
  }
}

const upload = multer({
  storage,
  fileFilter: filtrarArquivo,
  limits: {
    fileSize: 200 * 1024 * 1024,
  },
});

export default upload;
