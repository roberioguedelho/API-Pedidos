import { Router } from 'express';

import MesaController from '../controllers/MesaController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, MesaController.store);

export default router;
