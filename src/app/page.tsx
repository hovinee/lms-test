import AboutArea from '@containers/main/AboutArea'
import CourseArea from '@containers/main/CourseArea'
import HeroArea from '@containers/main/HeroArea'
import TodayCourseArea from '@containers/main/TodayLecturesArea'

export default async function Home() {
  return (
    <>
      <HeroArea />
      <AboutArea />
      <CourseArea />
      <TodayCourseArea />
    </>
  )
}
