import { NextRequest, NextResponse } from 'next/server'

export const registerUser = async (req: NextRequest) => {
  try {
    return NextResponse.json({ Result: 'success' }, { status: 200 })
  } catch {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    )
  }
}
