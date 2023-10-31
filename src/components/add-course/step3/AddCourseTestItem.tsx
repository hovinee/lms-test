import CSText from '@components/ui/text/CSText'
import { LectureTestListProps } from '@utils/types'

interface Props {
  item: LectureTestListProps
  id: number
  handleDelete: (lectureId: number) => void
  handleEdit: (lectureId: number) => void
}

const AddCourseTestItem = ({ item, handleDelete, handleEdit, id }: Props) => {
  return (
    <div className="boder-black relative my-[1.5rem] flex h-[6rem] w-full items-center justify-between rounded-[2rem] border border-black border-opacity-10 bg-white px-[2.4rem]">
      <>
        <CSText size="14" weight="normal" color="565656">
          {item.title}
        </CSText>
        <div className="flex gap-2">
          <div onClick={() => handleEdit(id)}>수정</div>
          <div onClick={() => handleDelete(id)}>삭제</div>
        </div>
      </>
    </div>
  )
}

export default AddCourseTestItem
