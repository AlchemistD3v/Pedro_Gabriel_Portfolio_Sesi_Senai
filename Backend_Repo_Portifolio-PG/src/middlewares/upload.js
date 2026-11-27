import multer from "multer";

const storage = multer.memoryStorage();

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
