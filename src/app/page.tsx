import AboutArea from '@containers/main/AboutArea'
import CourseArea from '@containers/main/CourseArea'
import HeroArea from '@containers/main/HeroArea'
import getQueryClient from '@utils/getQueryClients'
import { dehydrate } from '@tanstack/query-core'
import Hydrate from '@utils/hydrate.client'
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
