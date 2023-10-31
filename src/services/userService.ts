import User, { UserModel } from '@models/user'
import Database from '@utils/database'

export const findUserByEmail = async (email: string) => {
  await Database.getInstance()
  return await User.findOne({ email: email })
}

export const insertUser = async (user: UserModel) => {
  await Database.getInstance()
  return await new User({
    ...user,
    isVerified: false,
    validationCode: 0,
  }).save()
}
