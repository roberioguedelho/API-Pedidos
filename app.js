
import dotenv from 'dotenv';

dotenv.config();

import './src/database';

import express from 'express';
import userRoutes from './src/routes/UserRoutes';
import loginRoutes from './src/routes/LoginRoutes';
import mesaRoutes from './src/routes/MesaRoutes';
import produtoRoutes from './src/routes/ProdutoRoutes';
import pedidoRoutes from './src/routes/PedidoRoutes';


class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', userRoutes);
    this.app.use('/login', loginRoutes);
    this.app.use('/mesas', mesaRoutes);
    this.app.use('/produtos', produtoRoutes);
    this.app.use('/pedidos', pedidoRoutes);
  }
}

export default new App().app;