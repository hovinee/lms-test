'use client'

import AutoSizeImage from '@components/ui/auto-size-image/AutoSizeImage'
import CSText from '@components/ui/text/CSText'
import { AnimatePresence, motion } from 'framer-motion'
import { ChangeEvent, useState } from 'react'

const ProfessorOrStudent = () => {
  const [checkProfessor, setCheckProfessor] = useState<boolean>(false)
  const [checkStudent, setCheckStudent] = useState<boolean>(true)
  const [textValue, setTextValue] = useState<string>('')

  const handleSetValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextValue(e.target.value)
  }

  const handleRadio = (value: string) => {
    switch (value) {
      case 'professor':
        !checkProfessor && setCheckProfessor(!checkProfessor)
        !checkProfessor && setCheckStudent(false)
        break
      case 'student':
        !checkStudent && setCheckStudent(!checkStudent)
        !checkStudent && setCheckProfessor(false)
        break
    }
  }
  return (
    <>
      <div className="mt-[2.3rem] flex gap-[2.5rem]">
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
      </div>

      {checkProfessor && (
        <AnimatePresence mode="wait">
          <motion.div
            key={checkProfessor ? 'professor' : 'empty'}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <textarea
              placeholder="상세이력을 작성해주세요."
              value={textValue}
              onChange={(e) => handleSetValue(e)}
              className="mt-[0.8rem] h-[12.2rem] w-full rounded-[1.3rem] border-none bg-ECECEC px-[1.4rem] py-[1.7rem] text-12 text-565656 focus:outline-none"
            />
          </motion.div>
        </AnimatePresence>
      )}
    </>
  )
}

export default ProfessorOrStudent
