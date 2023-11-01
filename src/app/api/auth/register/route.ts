import { NextRequest } from 'next/server'
import { registerUser } from 'controllers/userController'

export async function POST(req: NextRequest) {
  return registerUser(req)
}
