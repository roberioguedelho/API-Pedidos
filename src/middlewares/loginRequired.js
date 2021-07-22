import jwt from 'jsonwebtoken';
import User from '../models/User';

export default async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ['Login required'],
    });
  }

  const [, token] = authorization.split(' ');

  try {
    const { id, user_name } = jwt.verify(token, process.env.TOKEN_SECRET);

    const user = await User.findOne({
      where: {
        id,
        user_name,
      },
    });

    if (!user) {
      return res.status(401).json({
        errors: ['Sessão expirou.'],
      });
    }

    req.userId = id;
    req.userUser_name = user_name;

    return next();
  } catch (error) {
    return res.status(401).json({
      errors: ['Token expirado ou inválido.'],
    });
  }
};
