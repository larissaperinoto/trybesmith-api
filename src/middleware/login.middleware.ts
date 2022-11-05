import { Request, Response, NextFunction } from 'express';
import validateLoginFields from '../utils/validations/validateLoginFields';

const verifyLoginFields = (req: Request, res: Response, next: NextFunction) => {
  const message = validateLoginFields(req.body);
  if (message) return res.status(400).json({ message });

  next();
};

export default verifyLoginFields;
