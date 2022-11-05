import Joi from 'joi';
import { IUser } from '../../interfaces/IUser';

const usersSchema = Joi.object({
  username: Joi.required().messages({
    'string.empty': '"username" is required',
  }),
  classe: Joi.required().messages({
    'string.empty': '"classe" is required',
  }),
  level: Joi.required().messages({
    'string.empty': '"level" is required',
  }),
  password: Joi.required().messages({
    'string.empty': '"level" is required',
  }),
});

const formatsSchema = Joi.object({
  username: Joi.string().min(3).required().messages({
    'string.base': '"username" must be a string',
    'string.min': '"username" length must be at least 3 characters long',
  }),
  classe: Joi.string().min(3).required().messages({
    'string.base': '"classe" must be a string',
    'string.min': '"classe" length must be at least 3 characters long',
  }),
  level: Joi.number().min(1).required().messages({
    'number.base': '"level" must be a number',
    'string.min': '"level" must be greater than or equal to 1',
  }),
  password: Joi.string().min(8).required().messages({
    'string.base': '"password" must be a string',
    'string.min': '"password" length must be at least 8 characters long',
  }),
});

export const validateUsersFields = (user:IUser) => {
  const { error } = usersSchema.validate(user);
  if (error) return error.details[0].message;
};

export const validateFormatFields = (user:IUser) => {
  const { error } = formatsSchema.validate(user);
  if (error) return error.details[0].message;
};
