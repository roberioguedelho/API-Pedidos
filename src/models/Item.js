import Sequelize, { Model } from 'sequelize';

export default class Item extends Model {
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
      quantidade: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'quantidade precisa ser um numero inteiro'
          },
          min: 0,
        }
      },
    }, 
    {
      sequelize,
      tableName: 'itens'
    });
    return this;
  }
  static associate(models) {
    this.belongsTo(models.Pedido, {foreignKey: 'pedido_id'})
    this.belongsTo(models.Produto, {foreignKey: 'produto_id'})
  }
}

