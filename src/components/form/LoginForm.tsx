'use client'
import Link from 'next/link'
import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const SignInForm = () => {
  const router = useRouter()

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string>('')

  const handleSumit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const res = await signIn('credentials', {
        email,
        password,
        redirect: false,
      })
      if (res && res.error) {
        setError('Invalid credentials')
        return
      }
      router.replace('/auth/userInfo')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="grid h-screen place-items-center">
      <div className="rounded-lg border-t-4 border-green-400 bg-white p-5 shadow-lg">
        <h1 className="my-4 text-lg font-bold">Enter the details</h1>
        <form onSubmit={handleSumit} className="flex flex-col gap-3">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <button className="cursor-pointer bg-green-600 px-6 py-2 font-bold text-white">
            Login
          </button>
          {error && (
            <div className="mt-2 w-fit rounded-md bg-red-500 px-3 py-1 text-sm text-white">
              {error}
            </div>
          )}

          <Link className="mt-3 text-right text-sm" href={'/auth/register'}>
            Don't have an account? <span className="underline">Register</span>
          </Link>
        </form>
      </div>
    </div>
  )
}
export default SignInForm
