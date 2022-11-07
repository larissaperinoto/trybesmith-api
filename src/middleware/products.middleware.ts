import { Request, Response, NextFunction } from 'express';
import {
  validateProductsFields,
  validateNameAndAmountFields,
} from '../utils/validations/validateProductsFields';

const verifyProductsFields = (req: Request, res: Response, next: NextFunction) => {
  const fieldsRequired = validateProductsFields(req.body);
  if (fieldsRequired) return res.status(400).json({ message: fieldsRequired });

  const fieldsFormat = validateNameAndAmountFields(req.body);
  if (fieldsFormat) return res.status(422).json({ message: fieldsFormat });

  next();
};

export default verifyProductsFields;
