import express from 'express';
import 'express-async-errors';

import errorMiddleware from './middleware/error.middleware';
import productsRoutes from './routes/products.routes';

const app = express();

app.use(express.json());

app.use('/products', productsRoutes);

app.use(errorMiddleware);

export default app;
