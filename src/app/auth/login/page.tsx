import LoginForm from '@components/form/LoginForm'
import { authOptions } from 'app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

const Login = async () => {
  const session = await getServerSession(authOptions)
  if (session) redirect('/auth/userInfo')
  return <LoginForm />
}

export default Login
