'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Section from '@components/ui/section/Section'
import CSText from '@components/ui/text/CSText'
import CSInput from '@components/ui/input/CSInput'
import CSButton from '@components/ui/button/CSButton'
import ProfessorOrStudent from './ProfessorOrStudent'

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
    <Section className="py-[7rem]">
      <CSText size="21" weight="bold" color="171717" className="font-inter">
        회원가입
      </CSText>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <ProfessorOrStudent />
        <CSText
          size="14"
          weight="normal"
          color="171717"
          className="font-inter mb-[0.9rem] mt-[3.6rem]"
        >
          이름
        </CSText>
        <CSInput type="text" setValue={setName} />
        <CSText
          size="14"
          weight="normal"
          color="171717"
          className="font-inter mb-[0.9rem] mt-[3.6rem]"
        >
          이메일
        </CSText>
        <CSInput type="text" setValue={setEmail} />
        <CSText
          size="14"
          weight="normal"
          color="171717"
          className="font-inter mb-[0.9rem] mt-[2.7rem]"
        >
          비밀번호
        </CSText>
        <CSInput type="password" setValue={setPassword} password={true} />
        <CSButton className="mt-[3.1rem]">
          <CSText size="18" weight="bold" color="white" className="font-inter">
            회원가입
          </CSText>
        </CSButton>
        {error && (
          <div className="mt-2 w-fit rounded-md bg-red-500 px-3 py-1 text-sm text-white">
            {error}
          </div>
        )}

        <Link className="mt-[2.5rem] text-right text-sm" href={'/auth/login'}>
          <CSText size="14" weight="normal" color="171717">
            회원이 아니신가요?
            <span className="underline">로그인</span>
          </CSText>
        </Link>
      </form>
    </Section>
  )
}
export default SignUpForm
