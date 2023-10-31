'use client'

import { Dispatch, SetStateAction, useState } from 'react'
import { Reorder } from 'framer-motion'
import AutoSizeImage from '@components/ui/auto-size-image/AutoSizeImage'
import CSText from '@components/ui/text/CSText'
import Section from '@components/ui/section/Section'
import AddLectureItem from './AddLectureItem'
import AddLectureForm from '@components/form/lecture-form/AddLectureForm'

interface Props {
  items: string[]
  setItems: Dispatch<SetStateAction<string[]>>
}

const AddLecture = ({ items, setItems }: Props) => {
  const [lectureTitle, setLectureTitle] = useState<string>('')
  const [uid, setUid] = useState<string>('')
  const [lectureId, setLectureId] = useState<number>(0)

  const [formEnabled, setFormEnabled] = useState<boolean>(false)
  const [editEnabled, setEditEnabled] = useState<boolean>(false)

  const handleDelete = (lectureId: number) => {
    const newLectures = items.filter((_lecture, index) => index !== lectureId)
    setItems(newLectures)
  }

  const handleUpdate = (
    lectureId: number,
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault()
    const updatedItems = [...items]
    updatedItems[lectureId] = lectureTitle
    setItems(updatedItems)
    setLectureTitle('')
    setFormEnabled(false)
    setEditEnabled(false)
  }

  const handleEdit = (lectureId: number) => {
    setFormEnabled(true)
    setEditEnabled(true)
    setLectureTitle(items[lectureId])
    setLectureId(lectureId)
  }

  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormEnabled(false)
    setItems((item) => [...item, `${lectureTitle}/${uid}`])
    setLectureTitle('')
  }

  return (
    <Section className="border-t bg-F2F2F2 py-[2.4rem]">
      <div
        className="mb-[2.4rem] flex h-[6rem] w-full items-center justify-center gap-[0.8rem] rounded-[2rem] outline-dashed outline-1"
        onClick={() => setFormEnabled(true)}
      >
        <AutoSizeImage
          src="/images/add-circled.png"
          className="h-[2.6rem] w-[2.6rem]"
        />
        <CSText weight="normal" size="14" color="565656">
          강의추가
        </CSText>
      </div>

      <Reorder.Group axis="y" onReorder={setItems} values={items}>
        {items.map((item, index) => (
          <AddLectureItem
            key={item}
            id={index}
            item={item}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </Reorder.Group>
      <AddLectureForm
        formEnabled={formEnabled}
        editEnabled={editEnabled}
        handleUpdate={handleUpdate}
        handleSave={handleSave}
        setLectureTitle={setLectureTitle}
        lectureTitle={lectureTitle}
        setUid={setUid}
        lectureId={lectureId}
      />
    </Section>
  )
}

export default AddLecture
