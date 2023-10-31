import { UserModel } from '@models/user'
import Joi from 'joi'

export const loginSchema = Joi.object<UserModel>({
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: false },
    })
    .required(),
  password: Joi.string().min(8).required(),
})

export const registerSchema = loginSchema.keys({
  name: Joi.string()
    .min(2)
    .max(20)
    .pattern(new RegExp(/^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9]+$/))
    .required(),
  job: Joi.string().valid('s', 't').required(),
})

export function validateUserRegister(user: UserModel) {
  return registerSchema.validate(user)
}

export function validateUserLogin(user: Omit<UserModel, 'userName'>) {
  return loginSchema.validate(user)
}
