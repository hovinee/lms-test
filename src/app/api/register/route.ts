import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcrypt'
import { connectMongoDB } from '@lib/mongodb'
import User from '@models/user'

export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json()
    const hashedPassword = await bcrypt.hash(password, 10)
    await connectMongoDB()

    await User.create({ name, email, password: hashedPassword })

    //201은 Created
    return NextResponse.json({ message: 'User registered.' }, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      {
        message: 'An error occurred while registering the user.',
      },
      { status: 500 },
    )
  }
}
