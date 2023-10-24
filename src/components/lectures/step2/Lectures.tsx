import Lecture from '@components/lectures/step2/Lecture'
import Section from '@components/ui/section/Section'
import CSText from '@components/ui/text/CSText'

const AddLectures = () => {
  return (
    <Section>
      <CSText weight={'normal'} size={'xl'} color={'black'}>
        강의 타이틀
      </CSText>
      <div className="mt-8 border-b border-black border-opacity-10" />
      <Lecture />
    </Section>
  )
}

export default AddLectures
