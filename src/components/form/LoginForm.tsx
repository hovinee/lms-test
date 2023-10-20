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
    <div className="w-full px-4 py-16">
      <div className="border-black-400 w-full rounded-lg border-t-4 bg-white p-5 shadow-lg">
        <h1 className="my-4 text-lg font-bold">로그인</h1>
        <form onSubmit={handleSumit} className="flex flex-col gap-3">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="이메일"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="비밀번호"
          />
          <button className="cursor-pointer border bg-black bg-green-600 px-6 py-2 font-bold text-white ">
            로그인
          </button>
          {error && (
            <div className="mt-2 w-fit rounded-md bg-red-500 px-3 py-1 text-sm text-white">
              {error}
            </div>
          )}

          <Link className="mt-3 text-right text-sm" href={'/auth/register'}>
            회원이 아니신가요? <span className="underline">회원가입</span>
          </Link>
        </form>
      </div>
    </div>
  )
}
export default SignInForm
