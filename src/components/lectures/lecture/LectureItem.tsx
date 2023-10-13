import { useState } from 'react'

import { useMotionValue, Reorder } from 'framer-motion'
import useRaisedShadow from 'hooks/use-raised-shadow'

interface Props {
  item: string
  id: number
  deleteLecture: (lectureId: number) => void
  updateLecture: (lectureId: number, newTitle: string) => void
}

export function Item({ item, deleteLecture, updateLecture, id }: Props) {
  const y = useMotionValue(0)
  const boxShadow = useRaisedShadow(y)
  const [editTitleEnabled, setEditTitleEnabled] = useState<boolean>(false)
  const [lectureTitle, setLectureTitle] = useState<string>('')

  return (
    <Reorder.Item value={item} key={item} style={{ boxShadow, y }}>
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
              <div onClick={() => setEditTitleEnabled(true)}>수정</div>
              <div onClick={() => deleteLecture(id)}>삭제</div>
            </div>
          </>
        )}
      </div>
    </Reorder.Item>
  )
}
