import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import User from '../models/User';
import Mesa from '../models/Mesa';
import Produto from '../models/Produto';
import Pedido from '../models/Pedido';
import Item from '../models/Item';

const models = [User, Mesa, Produto, Pedido, Item];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
