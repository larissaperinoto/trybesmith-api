import { Router } from 'express';
import UsersController from '../controllers/users.controller';
import verifyLoginFields from '../middleware/login.middleware';

const router = Router();

const usersController = new UsersController();

router.post('/', verifyLoginFields, usersController.login.bind(usersController));

export default router;