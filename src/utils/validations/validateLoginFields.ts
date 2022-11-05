import Joi from 'joi';
import ILogin from '../../interfaces/ILogin';

const loginSchema = Joi.object({
  username: Joi.string().required().messages({
    'string.empty': 'username is required',
  }),
  password: Joi.string().required().messages({
    'string.empty': 'password is required',
  }),
});

const validateLoginFields = (login:ILogin) => {
  const { error } = loginSchema.validate(login);
  if (error) return error.details[0].message;
};

export default validateLoginFields;