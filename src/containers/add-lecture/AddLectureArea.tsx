import AddLecture from '@components/add-course/step2/AddLecture'
import Section from '@components/ui/section/Section'
import CSText from '@components/ui/text/CSText'
import { Dispatch, SetStateAction } from 'react'

interface Props {
  courseName: string
  items: string[]
  setItems: Dispatch<SetStateAction<string[]>>
}

const AddLectureArea = ({ courseName, items, setItems }: Props) => {
  return (
    <div className="flex-1 overflow-y-auto bg-F2F2F2">
      <Section className="bg-white pb-[2rem] pt-[1.6rem]">
        <div
          className="border-#B3B3B3 flex h-[6.8rem] w-full items-center justify-center rounded-[2rem] border
           px-[5.8rem]  text-center"
        >
          <CSText weight={'bold'} size={'18'} color={'black'}>
            {courseName}
          </CSText>
        </div>
      </Section>
      <AddLecture items={items} setItems={setItems} />
    </div>
  )
}

export default AddLectureArea
