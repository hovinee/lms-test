import React from 'react'
import RegisterForm from '@components/form/RegisterForm'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from 'app/api/auth/[...nextauth]/route'

const Register = async () => {
  const session = await getServerSession(authOptions)
  if (session) redirect('/auth/userInfo')

  return <RegisterForm />
}

export default Register
