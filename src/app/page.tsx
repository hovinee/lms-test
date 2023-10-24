import AboutArea from '@containers/main/AboutArea'
import CourseArea from '@containers/main/CourseArea'
import HeroArea from '@containers/main/HeroArea'
import getQueryClient from '@utils/getQueryClients'
import { dehydrate } from '@tanstack/query-core'
import Hydrate from '@utils/hydrate.client'
import TodayCourseArea from '@containers/main/TodayLecturesArea'

export async function getVideos() {
  const CLOUDFLARE_API_TOKEN = 'YkoSyEjEBomP4E4aT4GpkUjD4G_YZ3yXe2YjBLzD'
  const CLOUDFLARE_ACCOUNT_ID = 'bf5b848ae1de1b815b53a235fd81b2a8'

  const res = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/stream/`,
    {
      headers: {
        Authorization: `Bearer ${CLOUDFLARE_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    },
  )
  const { result } = await res.json()
  return result
}

export const cls = (...classnames: string[]) => {
  return classnames.join(' ')
}

export default async function Home() {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(['get-video'], getVideos)
  const dehydratedState = dehydrate(queryClient)
  return (
    <>
      <HeroArea />
      <AboutArea />
      <CourseArea />
      <Hydrate state={dehydratedState}>
        <TodayCourseArea />
      </Hydrate>
    </>
  )
}
