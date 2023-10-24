'use client'

import AutoSizeImage from '@components/ui/auto-size-image/AutoSizeImage'
import CSText from '@components/ui/text/CSText'
import { useState } from 'react'

const ProfessorOrStudent = () => {
  const [checkProfessor, setCheckProfessor] = useState<boolean>(true)
  const [checkStudent, setCheckStudent] = useState<boolean>(false)

  const handleRadio = (value: string) => {
    switch (value) {
      case 'professor':
        if (!checkProfessor) {
          setCheckProfessor(!checkProfessor)
          setCheckStudent(false)
        }
        break
      case 'student':
        if (!checkStudent) {
          setCheckStudent(!checkStudent)
          setCheckProfessor(false)
        }
        break
    }
  }
  return (
    <div className="mt-[2.3rem] flex gap-[2.5rem]">
      <div
        className="flex items-center gap-[1rem]"
        onClick={() => handleRadio('professor')}
      >
        <AutoSizeImage
          src={`/images/${
            checkProfessor ? 'check-circled' : 'check-circled-none'
          }.png`}
          className="h-[1.5rem] w-[1.5rem]"
        />
        <CSText size="14" weight="bold" color="171717">
          교수
        </CSText>
      </div>
      <div
        className="flex items-center gap-[1rem]"
        onClick={() => handleRadio('student')}
      >
        <AutoSizeImage
          src={`/images/${
            checkStudent ? 'check-circled' : 'check-circled-none'
          }.png`}
          className="h-[1.5rem] w-[1.5rem]"
        />
        <CSText size="14" weight="bold" color="171717">
          학생
        </CSText>
      </div>
    </div>
  )
}

export default ProfessorOrStudent
