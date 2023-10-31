'use client'

import { Dispatch, SetStateAction, useState } from 'react'
import AutoSizeImage from '@components/ui/auto-size-image/AutoSizeImage'
import Section from '@components/ui/section/Section'
import CSText from '@components/ui/text/CSText'
import AddCourseTestItem from './AddCourseTestItem'
import { ChociesProps, LectureTestListProps } from '@utils/types'
import AddLectureTestForm from '@components/form/lecture-test-form/AddLectureTestForm'

interface Props {
  lectureTestList: LectureTestListProps[]
  setLectureTestList: Dispatch<SetStateAction<LectureTestListProps[]>>
}

const AddCourseTest = ({ lectureTestList, setLectureTestList }: Props) => {
  const [formEnabled, setFormEnabled] = useState<boolean>(false)
  const [editEnabled, setEditEnabled] = useState<boolean>(false)

  const [questionTitle, setQuestionTitle] = useState<string>('')
  const [choices, setChoices] = useState<ChociesProps[]>([
    { choice: '', checked: false },
    { choice: '', checked: false },
    { choice: '', checked: false },
    { choice: '', checked: false },
    { choice: '', checked: false },
  ])
  const [lectureTestId, setLectureTestId] = useState<number>(0)

  const handleChoiceChange = (index: number, newValue: string) => {
    const updatedChoices = [...choices]
    updatedChoices[index] = {
      choice: newValue,
      checked: updatedChoices[index].checked,
    }
    setChoices(updatedChoices)
  }

  const handleChecked = (index: number) => {
    const updatedChoices = [...choices]
    updatedChoices[index].checked = true
    updatedChoices.forEach((choice, i) => {
      if (i !== index) {
        choice.checked = false
      }
    })
    setChoices(updatedChoices)
  }

  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormEnabled(false)
    setLectureTestList((item) => [
      ...item,
      { title: questionTitle, choices: choices },
    ])
    setChoices([
      { choice: '', checked: false },
      { choice: '', checked: false },
      { choice: '', checked: false },
      { choice: '', checked: false },
      { choice: '', checked: false },
    ])
    setQuestionTitle('')
  }

  const handleDelete = (lectureId: number) => {
    const newLectures = lectureTestList.filter(
      (_lecture, index) => index !== lectureId,
    )
    setLectureTestList(newLectures)
  }

  const handleEdit = (lectureId: number) => {
    setFormEnabled(true)
    setEditEnabled(true)
    setQuestionTitle(lectureTestList[lectureId].title)
    setChoices(lectureTestList[lectureId].choices)
    setLectureTestId(lectureId)
  }

  const handleUpdate = (
    lectureId: number,
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault()
    const updatedItems = [...lectureTestList]
    updatedItems[lectureId].title = questionTitle
    updatedItems[lectureId].choices = choices
    setLectureTestList(updatedItems)
    setChoices([
      { choice: '', checked: false },
      { choice: '', checked: false },
      { choice: '', checked: false },
      { choice: '', checked: false },
      { choice: '', checked: false },
    ])
    setQuestionTitle('')
    setFormEnabled(false)
    setEditEnabled(false)
  }

  return (
    <Section className="flex-1 bg-F2F2F2 py-[1.3rem]">
      <div
        className="mb-[2.4rem] flex h-[6rem] w-full items-center justify-center gap-[0.8rem] rounded-[2rem] outline-dashed outline-1"
        onClick={() => setFormEnabled(true)}
      >
        <AutoSizeImage
          src="/images/add-circled.png"
          className="h-[2.6rem] w-[2.6rem]"
        />
        <CSText weight="normal" size="14" color="565656">
          테스트 추가
        </CSText>
      </div>

      {lectureTestList.map((item, index) => (
        <AddCourseTestItem
          key={index}
          id={index}
          item={item}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ))}

      <AddLectureTestForm
        formEnabled={formEnabled}
        editEnabled={editEnabled}
        handleUpdate={handleUpdate}
        handleSave={handleSave}
        setQuestionTitle={setQuestionTitle}
        choices={choices}
        questionTitle={questionTitle}
        lectureTestId={lectureTestId}
        handleChoiceChange={handleChoiceChange}
        handleChecked={handleChecked}
      />
    </Section>
  )
}

export default AddCourseTest
