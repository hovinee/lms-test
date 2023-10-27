import NextAuth, { AuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcrypt'
import { connectMongoDB } from '@lib/mongodb'
import User from '@models/user'
import Database from '@utils/database'

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {},

      async authorize(credentials: any) {
        const { email, password } = credentials

        try {
          await Database.getInstance()
          const user = await User.findOne({ email })
          console.log(user)
          if (!user) {
            return null
          }

          const passwordMatch = await bcrypt.compare(password, user.password)

          if (!passwordMatch) {
            return null
          }
          return user.toObject()
        } catch (error) {
          console.log('Error: ', error)
          return null
        }
      },
    }),
  ],

  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30일(30 * 24 * 60 * 60 초), 세션 유효 기간
  },
  secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
