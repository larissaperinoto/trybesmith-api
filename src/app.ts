import express from 'express';
import 'express-async-errors';

import errorMiddleware from './middleware/error.middleware';
import productsRoutes from './routes/products.routes';
import userRoutes from './routes/users.routes';
import ordersRoutes from './routes/orders.routes';

const app = express();

app.use(express.json());

app.use('/products', productsRoutes);
app.use('/users', userRoutes);
app.use('/orders', ordersRoutes);

app.use(errorMiddleware);

export default app;
