function criarCrud(Model, camposPermitidos, opcoes = {}) {
  const selecionarCampos = (dados) => {
    const resultado = {};

    for (const campo of camposPermitidos) {
      if (dados[campo] !== undefined) {
        resultado[campo] = dados[campo];
      }
    }

    return resultado;
  };

  return {
    async listar(req, res) {
      try {
        const where = {};

        for (const campo of opcoes.filtros || []) {
          if (req.query[campo] !== undefined) {
            where[campo] = req.query[campo];
          }
        }

        const registros = await Model.findAll({
          where,
          order: opcoes.order || [["id", "ASC"]],
        });

        return res.json(registros);
      } catch (erro) {
        return res.status(500).json({
          erro: "Erro ao listar registros.",
          detalhe: erro.message,
        });
      }
    },

    async buscar(req, res) {
      try {
        const registro = await Model.findByPk(req.params.id);

        if (!registro) {
          return res.status(404).json({ erro: "Registro não encontrado." });
        }

        return res.json(registro);
      } catch (erro) {
        return res.status(500).json({
          erro: "Erro ao buscar registro.",
          detalhe: erro.message,
        });
      }
    },

    async criar(req, res) {
      try {
        const registro = await Model.create(selecionarCampos(req.body));

        return res.status(201).json(registro);
      } catch (erro) {
        return res.status(400).json({ erro: erro.message });
      }
    },

    async atualizar(req, res) {
      try {
        const registro = await Model.findByPk(req.params.id);

        if (!registro) {
          return res.status(404).json({ erro: "Registro não encontrado." });
        }

        await registro.update(selecionarCampos(req.body));

        return res.json(registro);
      } catch (erro) {
        return res.status(400).json({ erro: erro.message });
      }
    },

    async excluir(req, res) {
      try {
        const removidos = await Model.destroy({ where: { id: req.params.id } });

        if (!removidos) {
          return res.status(404).json({ erro: "Registro não encontrado." });
        }

        return res.json({ ok: true });
      } catch (erro) {
        return res.status(500).json({
          erro: "Erro ao excluir registro.",
          detalhe: erro.message,
        });
      }
    },
  };
}

export default criarCrud;
