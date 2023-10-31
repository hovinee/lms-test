import CSText from '@components/ui/text/CSText'
import { useMotionValue, Reorder } from 'framer-motion'
import useRaisedShadow from 'hooks/use-raised-shadow'

interface Props {
  item: string
  id: number
  handleDelete: (lectureId: number) => void
  handleEdit: (lectureId: number) => void
}

const AddLectureItem = ({ item, handleDelete, handleEdit, id }: Props) => {
  const y = useMotionValue(0)
  const boxShadow = useRaisedShadow(y)

  return (
    <Reorder.Item
      value={item}
      key={item}
      style={{ boxShadow, y, borderRadius: '2rem' }}
    >
      <div className="boder-black relative my-[1.5rem] flex h-[6rem] w-full items-center justify-between rounded-[2rem] border border-black border-opacity-10 bg-white px-[2.4rem]">
        <>
          <CSText size="14" weight="normal" color="565656">
            {item.split('/')[0]}
          </CSText>
          <div className="flex gap-2">
            <div onClick={() => handleEdit(id)}>수정</div>
            <div onClick={() => handleDelete(id)}>삭제</div>
          </div>
        </>
      </div>
    </Reorder.Item>
  )
}

export default AddLectureItem
