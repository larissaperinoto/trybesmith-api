import { Request, Response, NextFunction } from 'express';
import {
  validateUsersFields,
  validateFormatFields,
} from '../utils/validations/validateUsersFields';

const verifyUsersFields = (req: Request, res: Response, next: NextFunction) => {
  const fieldsRequired = validateUsersFields(req.body);
  if (fieldsRequired) return res.status(400).json({ message: fieldsRequired });

  const fieldsFormat = validateFormatFields(req.body);
  if (fieldsFormat) return res.status(422).json({ message: fieldsFormat });

  next();
};

export default verifyUsersFields;
