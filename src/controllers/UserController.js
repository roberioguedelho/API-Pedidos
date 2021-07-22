import User from "../models/User";

class UserController {
  async store(req, res) {
    const user = await User.findByPk(req.userId);

    if (!user.admin) {
      res.status(401).json({error: "Somente administradores podem criar usuarisos"})
    }

    try {
      req.body.status = 'ATIVO'
      const novoUser = await User.create(req.body);
      res.json(novoUser);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
