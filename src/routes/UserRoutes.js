import { Router } from 'express';

import UserController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired,UserController.store);

export default router;
