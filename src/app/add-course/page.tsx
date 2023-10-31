'use client'

import LecturesIntro from '@components/lectures/step1/LecturesIntro'
import Lectures from '@components/lectures/step2/Lectures'
import LecturesTest from '@components/lectures/step3/LecturesTest'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const AddLectures = () => {
  const router = useRouter()

  const [createLecture, setCreateLecture] = useState<number>(0)
  const nextStep = () => {
    setCreateLecture((step) => step + 1)
    if (createLecture === 2) {
      alert('강의가 저장되었습니다.')
      router.push('/manage-course')
    }
  }
  return (
    <>
      {createLecture === 0 && <LecturesIntro />}
      {createLecture === 1 && <Lectures />}
      {createLecture === 2 && <LecturesTest />}
      {/* <button className="h-8 w-20 rounded bg-orange" onClick={nextStep}>
        {createLecture !== 2 ? '다음' : '완료'}
      </button> */}
    </>
  )
}

export default AddLectures
