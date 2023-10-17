import AboutArea from '@containers/main/AboutArea'
import CourseArea from '@containers/main/CourseArea'
import HeroArea from '@containers/main/HeroArea'
import LecturesArea from '@containers/main/LecturesArea'

export default function Home() {
  return (
    <>
      <HeroArea />
      <AboutArea />
      <CourseArea />
      <LecturesArea />
    </>
  )
}
