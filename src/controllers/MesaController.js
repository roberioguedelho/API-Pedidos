import Mesa from "../models/Mesa";
import User from '../models/User'

class MesaController {
  async store(req, res) {
    const user = await User.findByPk(req.userId);

    if (!user.admin) {
      res.status(401).json({error: "Somente administradores podem criar mesas"})
    }

    try {
      req.body.status = 'ATIVO'
      const novaMesa = await Mesa.create(req.body);
      res.json(novaMesa);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new MesaController();
