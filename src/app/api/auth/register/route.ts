import { NextRequest, NextResponse } from 'next/server'
import { registerUser } from 'controllers/userController'
import { NextApiRequest, NextApiResponse } from 'next'
import { UserModel } from '@models/user'
import { error } from 'console'

export async function POST(req: NextRequest) {
  return registerUser(req)
}
