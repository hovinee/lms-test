import { UserModel } from '@models/user'
import Joi from 'joi'

export const loginSchema = Joi.object({
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: false },
    })
    .required(),
  password: Joi.string().min(8).required(),
})

export const registerSchema = loginSchema.keys({
  userName: Joi.string()
    .min(2)
    .max(12)
    .pattern(new RegExp(/^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9]+$/))
    .required(),
})

export function validateUserRegister(user: UserModel) {
  return registerSchema.validate(user)
}

export function validateUserLogin(user: Omit<UserModel, 'userName'>) {
  return loginSchema.validate(user)
}
