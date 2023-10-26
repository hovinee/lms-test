import { NextRequest, NextResponse } from 'next/server'
import { registerUser } from 'controllers/userController'

export async function POST(req: NextRequest) {
  console.log('aa')
  //registerUser(req)
  return NextResponse.json({ Result: 'aa' }, { status: 200 })
}
