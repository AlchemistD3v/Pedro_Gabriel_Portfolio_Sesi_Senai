const TOKEN_PADRAO = "minhasenha123";

export function checaSenha(req, res, next) {
  const token = process.env.ADMIN_TOKEN || TOKEN_PADRAO;

  if (req.headers["x-admin-token"] !== token) {
    return res.status(401).json({ erro: "Senha errada" });
  }

  next();
}
