import { Router } from 'express';
import OrdersController from '../controllers/orders.controller';
import verifyOrdersFields from '../middleware/orders.middleware';
import authMiddleware from '../middleware/auth.middleware';

const router = Router();

const ordersController = new OrdersController();

router.get('/', ordersController.findAll.bind(ordersController));
router.use(authMiddleware);
router.post('/', verifyOrdersFields, ordersController.insert.bind(ordersController));

export default router;