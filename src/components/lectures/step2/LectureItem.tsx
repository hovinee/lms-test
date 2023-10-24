import { useState } from 'react'

import { useMotionValue, Reorder } from 'framer-motion'
import useRaisedShadow from 'hooks/use-raised-shadow'
import Link from 'next/link'

interface Props {
  item: string
  id: number
  deleteLecture: (lectureId: number) => void
  updateLecture: (lectureId: number, newTitle: string) => void
}

const LectureItem = ({ item, deleteLecture, updateLecture, id }: Props) => {
  const y = useMotionValue(0)
  const boxShadow = useRaisedShadow(y)
  const [editTitleEnabled, setEditTitleEnabled] = useState<boolean>(false)
  const [lectureTitle, setLectureTitle] = useState<string>('')

  return (
    <Reorder.Item value={item} key={item} style={{ boxShadow, y }}>
      <Link href={'/add-lecture'}>
        <div className="boder-black relative mt-4 flex h-20 w-full items-center justify-between rounded-md border border-black border-opacity-10 px-8">
          {editTitleEnabled ? (
            <>
              <input
                onChange={(value) => setLectureTitle(value.currentTarget.value)}
                placeholder="제목을 입력하세요"
                value={lectureTitle}
              />
              <div
                onClick={() => {
                  setEditTitleEnabled(false), updateLecture(id, lectureTitle)
                }}
              >
                저장
              </div>
            </>
          ) : (
            <>
              <div>{item}</div>
              <div className="flex gap-2">
                <div onClick={() => setEditTitleEnabled(true)}>등록</div>
                <div onClick={() => setEditTitleEnabled(true)}>수정</div>
                <div onClick={() => deleteLecture(id)}>삭제</div>
              </div>
            </>
          )}
        </div>
      </Link>
    </Reorder.Item>
  )
}

export default LectureItem
