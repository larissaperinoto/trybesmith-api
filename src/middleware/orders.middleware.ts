import { Request, Response, NextFunction } from 'express';
import {
  validateOrdersFields,
  validateFormatFields,
} from '../utils/validations/validateOrdersFields';

const verifyOrdersFields = (req: Request, res: Response, next: NextFunction) => {
  const { productsIds } = req.body;
  const fieldsRequired = validateOrdersFields(productsIds);
  if (fieldsRequired) return res.status(400).json({ message: fieldsRequired });
  if (productsIds.length === 0) {
    return res.status(422).json({ message: '"productsIds" must include only numbers' });
  }
  const fieldsFormat = validateFormatFields(productsIds);
  if (fieldsFormat) return res.status(422).json({ message: fieldsFormat });
  // Não consegui validar o length com o Joi.
  next();
};

export default verifyOrdersFields;
