import { Request, Response, NextFunction } from 'express';
import {
  validateUsersFields,
  validateFormatFields,
} from '../utils/validations/validateUsersFields';

const verifyUsersFields = (req: Request, res: Response, next: NextFunction) => {
  const fieldsRequired = validateUsersFields(req.body);
  if (fieldsRequired) return res.status(400).json({ message: fieldsRequired });

  const nameAndAmountFormat = validateFormatFields(req.body);
  if (nameAndAmountFormat) return res.status(422).json({ message: nameAndAmountFormat });

  next();
};

export default verifyUsersFields;
