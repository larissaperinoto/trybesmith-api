import { Request, Response, NextFunction } from 'express';
import {
  validateProductsFields,
  validateNameAndAmountFields,
} from '../utils/validations/validateProductsFields';

const verifyProductsFields = (req: Request, res: Response, next: NextFunction) => {
  const fieldsRequired = validateProductsFields(req.body);
  if (fieldsRequired) return res.status(400).json({ message: fieldsRequired });

  const nameAndAmountFormat = validateNameAndAmountFields(req.body);
  if (nameAndAmountFormat) return res.status(422).json({ message: nameAndAmountFormat });

  next();
};

export default verifyProductsFields;
