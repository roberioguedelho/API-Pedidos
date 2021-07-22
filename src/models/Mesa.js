import Sequelize, { Model } from 'sequelize';

export default class Mesa extends Model {
  static init(sequelize) {
    super.init({
      numero: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        unique:{
          msg: 'Numero já existente',
        },
        validate: {
          isInt: {
            msg: 'Numero dever ser inteiro',
          },
        },
      },
      status: {
        type: Sequelize.STRING,
        defaultValue: 'ATIVO',
      },
    }, 
    {
      sequelize,
    });
    return this;
  }
}
