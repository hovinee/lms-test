'use client'

import Link from 'next/link'
import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Section from '@components/ui/section/Section'
import CSInput from '@components/ui/input/CSInput'
import CSText from '@components/ui/text/CSText'
import CSButton from '@components/ui/button/CSButton'

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
    <Section>
      <CSText size="21" weight="bold" color="171717" className="font-inter">
        로그인
      </CSText>
      <form onSubmit={handleSumit} className="flex flex-col">
        <CSText
          size="14"
          weight="normal"
          color="171717"
          className="mb-[0.9rem] mt-[3.6rem] font-inter"
        >
          이메일
        </CSText>
        <CSInput type="text" setValue={setEmail} />
        <CSText
          size="14"
          weight="normal"
          color="171717"
          className="mb-[0.9rem] mt-[2.7rem] font-inter"
        >
          비밀번호
        </CSText>
        <CSInput type="password" setValue={setPassword} password={true} />
        <CSText
          size="12"
          weight="normal"
          color="171717"
          className="mt-[0.6rem] text-right"
        >
          비밀번호 찾기
        </CSText>
        <CSButton className="mt-[3.1rem]">
          <CSText size="18" weight="bold" color="white" className="font-inter">
            로그인
          </CSText>
        </CSButton>
        {error && (
          <div className="mt-2 w-fit rounded-md bg-red-500 px-3 py-1 text-sm text-white ">
            {error}
          </div>
        )}

        <Link
          className="mt-[2.5rem] text-right text-sm"
          href={'/auth/register'}
        >
          <CSText size="14" weight="normal" color="171717">
            회원이 아니신가요?
            <span className="underline">회원가입</span>
          </CSText>
        </Link>
      </form>
    </Section>
  )
}
export default SignInForm
