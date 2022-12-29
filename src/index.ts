import swaggerUi from 'swagger-ui-express';
import swaggerDocs from './swagger.json';
import app from './app';

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const PORT = 3000;

const server = app.listen(PORT, () => console.log(
  `Server is running on PORT: ${PORT}`,
));

export default server;
