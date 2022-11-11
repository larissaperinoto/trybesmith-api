import { NextFunction, Request, Response } from 'express';
import HttpException from '../utils/error.exception';

const errorMiddleware = (err: Error, req: Request, res: Response, _next: NextFunction) => {
  const { status, message } = err as HttpException;
  return res.status(status).json({ message });
};

export default errorMiddleware;
