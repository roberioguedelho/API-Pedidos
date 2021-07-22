import jwt from 'jsonwebtoken';
import User from '../models/User';

class LoginController {
  async store(req, res) {
    const { user_name = '', password = '' } = req.body;

    if (!user_name || !password) {
      return res.status(401).json({
        errors: 'Credenciais invalidas',
      });
    }

    const user = await User.findOne({ where: { user_name } });

    if (!user) {
      return res.status(401).json({
        errors: ['Usuario nao existe'],
      });
    }

    if (!(await user.passwordIsValid(password))) {
      return res.status(401).json({
        errors: ['Senha invalida'],
      });
    }

    const { id } = user;
    const token = jwt.sign({ id, user_name }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.json({ token });
  }
}

export default new LoginController();
