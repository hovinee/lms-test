import NextAuth, { AuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcrypt'
import User from '@models/user'
import { connectMongoDB } from '@lib/mongodb'

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {},

      async authorize(credentials: any) {
        const { email, password } = credentials

        try {
          await connectMongoDB()
          const user = await User.findOne({ email })

          if (!user) {
            return null
          }

          const paswwordMatch = await bcrypt.compare(password, user.password)

          if (!paswwordMatch) {
            return null
          }
          return user
        } catch (error) {
          console.log('Error: ', error)
        }
      },
    }),
  ],

  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30일(30 * 24 * 60 * 60 초), 세션 유효 기간
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/',
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
