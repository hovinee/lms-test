import User, { UserModel } from '@models/user'
import ResponseHelper from '@utils/ResponseHelper'
import bcrypt from 'bcrypt'
import { validateUserRegister } from '@utils/validation'
import { NextRequest } from 'next/server'
import { sendValidationMailTo } from 'services/mailService'
import { findUserByEmail, insertUser } from 'services/userService'

const getJsonData = async (req: NextRequest) => {
  try {
    const reqData = await req.json()
    return reqData
  } catch (_) {
    return null
  }
}

export const registerUser = async (req: NextRequest) => {
  try {
    const reqData = await getJsonData(req)

    if (!reqData) return ResponseHelper.error('invalid json format')

    const newUser: UserModel = reqData
    const hash = await bcrypt.hash(newUser.password, 10)
    newUser.password = hash

    // 인풋 정보가 스키마를 위반한 경우.
    const { error } = validateUserRegister(newUser)
    if (error) return ResponseHelper.error('invalid input data')

    const user: UserModel = await findUserByEmail(newUser.email)
    // 유저가 이미 있는 경우.
    if (user?.isVerified) return ResponseHelper.error('user already exist')

    // 유저가 아직 본인 인증을 하지 않은 경우.
    if (user && !user.isVerified)
      return ResponseHelper.error(
        'user already exist, user verification required',
        200,
        1200,
      )
    else insertUser(newUser)

    return ResponseHelper.success()
  } catch (err: any) {
    console.log(err.message)
    return ResponseHelper.internalError(err.message)
  }
}

export const sendValidationCodeToUser = async (req: NextRequest) => {
  try {
    const reqData = await getJsonData(req)
    if (!reqData) return ResponseHelper.error('invalid input data')

    const email = reqData
    const user: UserModel = await findUserByEmail(email)

    // 유저 등록이 안 된 경우.
    if (!user) return ResponseHelper.error('not found user')
    // 유저가 이미 인증 유효한 경우.
    if (user.isVerified)
      return ResponseHelper.error('already verified.', 200, 1200)

    const validationCode = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000
    await User.findOneAndUpdate({ email: email }, { validationCode })
    sendValidationMailTo(email, validationCode)
    return ResponseHelper.success()
  } catch (err: any) {
    console.log(err.message)
    return ResponseHelper.internalError(err.message)
  }
}

export const verifyUser = async (req: NextRequest) => {
  try {
    const reqData = await getJsonData(req)
    if (!reqData) return ResponseHelper.error('invalid input data')

    const { email, code } = reqData
    const user: UserModel = await findUserByEmail(email)

    // 유저 등록이 안 된 경우.
    if (!user) return ResponseHelper.error('not found user')

    if (code != user.validationCode) {
      return ResponseHelper.error('no matched code')
    }

    const verifiedUser = await User.findOneAndUpdate(
      { email: email },
      { isVerified: true },
      { new: true },
    )
    console.log(verifiedUser)
    return ResponseHelper.success()
  } catch (err: any) {
    console.log(err.message)
    return ResponseHelper.internalError(err.message)
  }
}
