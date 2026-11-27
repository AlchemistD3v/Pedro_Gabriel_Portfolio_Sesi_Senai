// Só deixa alterar alguma coisa quem souber o ADMIN_TOKEN.
export function checaSenha(req, res, next) {
  if (req.headers["x-admin-token"] !== process.env.ADMIN_TOKEN) {
    return res.status(401).json({ erro: "Senha errada" });
  }

  next();
}
