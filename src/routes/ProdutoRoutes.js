import { Router } from 'express';

import ProdutoController from '../controllers/ProdutoController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, ProdutoController.store);
router.get('/', ProdutoController.index);

export default router;
