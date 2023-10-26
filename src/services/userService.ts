import { User } from '@models/user'
import Database from '@utils/database'

export const findUserByEmail = async (email: string) => {
  await Database.getInstance()
  const user = await User.findOne({ email: email })
  console.log(user)
  return user
}
