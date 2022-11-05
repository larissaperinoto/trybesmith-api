import { Router } from 'express';
import ProductsController from '../controllers/products.contoller';
import verifyProductsFields from '../middleware/products.middleware';

const router = Router();

const productsController = new ProductsController();

router.get('/', productsController.findAll.bind(productsController));
router.post('/', verifyProductsFields, productsController.insert.bind(productsController));

export default router;