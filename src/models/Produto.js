import Sequelize, { Model } from 'sequelize';

export default class Produto extends Model {
  static init(sequelize) {
    super.init({
      descricao: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [1, 255],
            msg: 'Campo nome deve ter entre 1 e 255 caracteres',
          },
        },
      },
      quantidade: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'Quantidade precisa ser um numero intero'
          },
          min: 0
        }
      },
      valor: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Valor precisa ser um numero'
          },
          min: 0,
        }
      },
      status: {
        type: Sequelize.STRING,
        defaultValue: 'ATIVO',
      },
      // user_id: {
      //   type: Sequelize.INTEGER,
      // },
    }, 
    {
      sequelize,
    });
    return this;
  }
  static associate(models) {
    this.belongsTo(models.User, {foreignKey: 'user_id'})
    this.hasOne(models.Item, {foreignKey: 'produto_id'})
  }
}

