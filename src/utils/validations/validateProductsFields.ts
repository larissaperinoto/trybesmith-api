import Joi from 'joi';
import { IProduct } from '../../interfaces/IProducts';

const productsSchema = Joi.object({
  name: Joi.required().messages({
    'string.empty': '"name" is required',
  }),
  amount: Joi.required().messages({
    'string.empty': 'password is required',
  }),
});

const nameAmountSchema = Joi.object({
  name: Joi.string().min(3).required().messages({
    'string.base': '"name" must be a string',
    'string.min': '"name" length must be at least 3 characters long',
  }),
  amount: Joi.string().min(3).required().messages({
    'string.base': '"amount" must be a string',
    'string.min': '"amount" length must be at least 3 characters long',
  }),
});

export const validateProductsFields = (product:IProduct) => {
  const { error } = productsSchema.validate(product);
  if (error) return error.details[0].message;
};

export const validateNameAndAmountFields = (product:IProduct) => {
  const { error } = nameAmountSchema.validate(product);
  if (error) return error.details[0].message;
};
