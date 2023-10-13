'use client'

import { isEmpty } from 'lodash'
import { useState } from 'react'
import { Reorder } from 'framer-motion'
import { Item } from '../lecture/LectureItem'

const Chapter = () => {
  const [items, setItems] = useState<string[]>([])
  const [chapterTitle, setChapterTitle] = useState<string>('')
  const [lectureTitle, setLectureTitle] = useState<string>('')
  const [addLectureEnabled, setaddLectureEnabled] = useState<boolean>(false)
  const [editTitleEnabled, setEditTitleEnabled] = useState<boolean>(false)
  const editTitle = () => setEditTitleEnabled(!editTitleEnabled)

  const addLecture = (lectureTitle: string) => {
    setItems((item) => [...item, lectureTitle])
  }

  const deleteLecture = (lectureId: number) => {
    const newLectures = items.filter((_lecture, index) => index !== lectureId)
    setItems(newLectures)
  }

  const updateLecture = (lectureId: number, newTitle: string) => {
    const updatedItems = [...items]
    updatedItems[lectureId] = newTitle
    setItems(updatedItems)
  }

  const savaLectureTitle = () => {
    setaddLectureEnabled(false), addLecture(lectureTitle)
  }

  return (
    <>
      <div className="boder-black mt-8 flex h-20 w-full  items-center justify-between rounded-md border border-black border-opacity-10 px-8">
        {editTitleEnabled ? (
          <input
            onChange={(value) => setChapterTitle(value.currentTarget.value)}
          />
        ) : (
          <div>{isEmpty(chapterTitle) ? 'CHAPTER' : chapterTitle}</div>
        )}
        <div onClick={editTitle}>{editTitleEnabled ? '완료' : '수정'}</div>
      </div>

      <Reorder.Group axis="y" onReorder={setItems} values={items}>
        {items.map((item, index) => (
          <Item
            key={item}
            id={index}
            item={item}
            deleteLecture={deleteLecture}
            updateLecture={updateLecture}
          />
        ))}
      </Reorder.Group>

      {addLectureEnabled && (
        <div className="boder-black mt-4 flex h-20 w-full items-center justify-between rounded-md border border-black border-opacity-10 px-8">
          <input
            onChange={(value) => setLectureTitle(value.currentTarget.value)}
            placeholder="제목을 입력하세요"
          />
          <div onClick={savaLectureTitle}>저장</div>
        </div>
      )}

      <div className="mt-4 grid grid-cols-2 gap-6">
        <div
          className="boder-black flex h-16 items-center rounded-md border border-black border-opacity-10 pl-8"
          onClick={() => setaddLectureEnabled(true)}
        >
          + 강의 추가
        </div>
        <div className="boder-black flex h-16 items-center rounded-md border border-black border-opacity-10 pl-8">
          + 퀴즈 추가
        </div>
      </div>
    </>
  )
}

export default Chapter
