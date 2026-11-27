// Pega o caminho do arquivo enviado e coloca no corpo da requisição.
function anexarArquivos(req, res, next) {
  if (req.file) {
    req.body[req.file.fieldname] = `/uploads/${req.file.filename}`;
  }

  if (req.files) {
    for (const campo in req.files) {
      req.body[campo] = `/uploads/${req.files[campo][0].filename}`;
    }
  }

  next();
}

export default anexarArquivos;
