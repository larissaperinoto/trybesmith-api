import Joi from 'joi';
import { IOrder } from '../../interfaces/IOrder';

const ordersSchema = Joi.object({
  productsIds: Joi.required().messages({
    'string.empty': '"productsIds" is required',
  }),
});

const productsIdsSchema = Joi.object({
  productsIds: Joi.array().messages({
    'string.base': '"productsIds" must be an array',
  }),
});

export const validateOrdersFields = (order:IOrder) => {
  const { error } = ordersSchema.validate({ productsIds: order });
  if (error) return error.details[0].message;
};

export const validateFormatFields = (order: number[]) => {
  const { error } = productsIdsSchema.validate({ productsIds: order });
  if (error) return error.details[0].message;
};
