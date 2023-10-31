import mongoose, { Schema, models } from 'mongoose'

export interface UserModel {
  name: string
  email: string
  password: string
  job: string
  isVerified?: boolean
  validationCode?: number
}

const userSchema = new Schema<UserModel>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    job: {
      type: String,
      required: true,
    },
    isVerified: {
      type: Boolean,
      required: false,
      default: false,
    },
    validationCode: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  { timestamps: true },
)

userSchema.index({ email: 1 })

const User =
  models.user || mongoose.model<UserModel>('user', userSchema, 'user')

export default User
