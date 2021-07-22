import User from "../models/User";
import Produto from '../models/Produto'

class ProdutoController {
  async store(req, res) {
    const user = await User.findByPk(req.userId);

    if (!user.admin) {
      res.status(401).json({error: "Somente administradores podem criar mesas"})
    }

    try {
      req.body.status = 'ATIVO'
      req.body.user_id = req.userId
      const novoProduto = await Produto.create(req.body);
      res.json(novoProduto);
    } catch (e) {
      return res.status(400).json(e);
    }
  }
  async index(req, res) {
    const produtos = await Produto.findAll({
      attributes: ['descricao', 'quantidade', 'valor', 'status'],
      include: {
        model: User,
        attributes: ['nome']
      },
    });
    return res.json(produtos);
  }
}
export default new ProdutoController();
