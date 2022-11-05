import { Router } from 'express';
import UsersController from '../controllers/users.controller';
import verifyUsersFields from '../middleware/users.middleware';

const router = Router();

const usersController = new UsersController();

router.post('/', verifyUsersFields, usersController.insert.bind(usersController));

export default router;