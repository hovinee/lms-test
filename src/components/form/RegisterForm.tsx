'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface VerificationCode {
  one?: string
  two?: string
  three?: string
  four?: string
}

const SignUpForm = () => {
  const router = useRouter()
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string>('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!name || !email || !password) {
      setError('All fields are necessary.')
      return
    }

    try {
      const UserExists = await fetch('/api/userExists', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
        }),
      })

      const { user } = await UserExists.json()
      if (user) {
        setError('User already exists.')
        return
      }

      const res = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      })

      if (res.ok) {
        const form = e.target as HTMLFormElement
        form.reset()
        router.push('/')
      } else {
        console.log('User registration failed.')
      }
    } catch (error) {
      console.log('Error during registration', error)
    }
  }

  // const [signUpProcess, setSignUpProcess] = useState<number>(0)
  // const [values, setValues] = useState<string[]>(['', '', '', ''])
  // const inputRefs = useRef<(HTMLInputElement | null)[]>([
  //   null,
  //   null,
  //   null,
  //   null,
  // ])

  // const handleInputChange = (
  //   e: ChangeEvent<HTMLInputElement>,
  //   index: number,
  // ) => {
  //   const newValues = [...values]
  //   newValues[index] = e.target.value
  //   setValues(newValues)

  //   // 최대 입력 길이에 도달하면 다음 input으로 포커스 이동
  //   if (e.target.value.length === 1 && index < values.length - 1) {
  //     inputRefs.current[index + 1]?.focus()
  //   }
  // }

  // const handleFocus = (index: number) => {
  //   inputRefs.current[index]?.focus()
  // }
  return (
    <div className="grid h-screen place-items-center">
      <div className="rounded-lg border-t-4 border-green-400 bg-white p-5 shadow-lg">
        <h1 className="my-4 text-lg font-bold">SignUp</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Full Name"
          />
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
            Register
          </button>
          {error && (
            <div className="mt-2 w-fit rounded-md bg-red-500 px-3 py-1 text-sm text-white">
              {error}
            </div>
          )}

          <Link className="mt-3 text-right text-sm" href={'/auth/login'}>
            Already have an account <span className="underline">Login</span>
          </Link>
        </form>
      </div>
    </div>
  )
}
export default SignUpForm
