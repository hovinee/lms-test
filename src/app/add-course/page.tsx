'use client'

import AddCourseIntro from '@components/add-course/step1/AddCourseIntro'
import AddCourseTest from '@components/add-course/step3/AddCourseTest'
import MultiStep from '@components/multi-step/MultiStep'
import CSButton from '@components/ui/button/CSButton'
import Section from '@components/ui/section/Section'
import CSText from '@components/ui/text/CSText'
import AddLectureArea from '@containers/add-lecture/AddLectureArea'
import { LectureTestListProps } from '@utils/types'
import { isEmpty } from 'lodash'
import { useState } from 'react'

const AddLectures = () => {
  const [step, setStep] = useState<number[]>([0])
  const [createLecture, setCreateLecture] = useState<number>(0)

  //courseInro thumbnailImg은 formData
  const [thumbnailImg, setThumbnailImg]: any = useState(null)
  const [courseTitle, setCourseTitle] = useState<string>('')
  const [courseIntro, setCourseIntro] = useState<string>('')

  //addLecture
  const [items, setItems] = useState<string[]>([])

  //courseTest
  const [lectureTestList, setLectureTestList] = useState<
    LectureTestListProps[]
  >([])

  const nextStep = () => {
    if (
      (createLecture === 0 && isEmpty(courseTitle)) ||
      isEmpty(courseIntro) ||
      isEmpty(thumbnailImg)
    ) {
      alert('강의 정보 작성을 완료해주세요.')
    } else if (createLecture === 1) {
      setStep((num) => [...num, num.length])
      setCreateLecture((num) => num + 1)
    } else if (createLecture === 2) {
      //TODO: 완료 클릭시 api 통신
    } else {
      setStep((num) => [...num, num.length])
      setCreateLecture((num) => num + 1)
    }
  }

  return (
    <div className="flex h-[calc((100vh-5.6rem))] flex-col">
      <MultiStep step={step} />
      {createLecture === 0 && (
        <AddCourseIntro
          thumbnailImg={thumbnailImg}
          setThumbnailImg={setThumbnailImg}
          courseIntro={courseIntro}
          setCourseIntro={setCourseIntro}
          setCourseTitle={setCourseTitle}
        />
      )}
      {createLecture === 1 && (
        <AddLectureArea
          courseName={courseTitle}
          setItems={setItems}
          items={items}
        />
      )}
      {createLecture === 2 && (
        <AddCourseTest
          setLectureTestList={setLectureTestList}
          lectureTestList={lectureTestList}
        />
      )}
      <Section className="flex h-[7.8rem] items-center bg-white py-[1.4rem]">
        <CSButton onClick={nextStep} type="button">
          <CSText size="18" weight="blod" color="white" className="font-inter">
            {createLecture === 2 ? '완료' : '다음'}
          </CSText>
        </CSButton>
      </Section>
    </div>
  )
}

export default AddLectures
