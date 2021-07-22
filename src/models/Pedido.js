import Sequelize, { Model } from 'sequelize';

export default class Pedido extends Model {
  static init(sequelize) {
    super.init({
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
      observacao: {
        type: Sequelize.STRING,
      },
    }, 
    {
      sequelize,
    });
    return this;
  }
  static associate(models) {
    this.hasMany(models.Item, {foreignKey: 'pedido_id'})
    this.belongsTo(models.User, {foreignKey: 'user_id', as:'user'})
    this.belongsTo(models.Mesa, {foreignKey: 'mesa_id', as:'mesa'})
  }
}

