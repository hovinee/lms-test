import AboutArea from '@containers/about/AboutArea'
import CourseArea from '@containers/course/CourseArea'
import HeroArea from '@containers/hero/HeroArea'
import LecturesArea from '@containers/lectures/LecturesArea'
import getQueryClient from '@utils/getQueryClients'
import { dehydrate } from '@tanstack/query-core'
import Hydrate from '@utils/hydrate.client'
import Line from '@components/ui/line/Line'

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

export default async function Home() {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(['get-video'], getVideos)
  const dehydratedState = dehydrate(queryClient)
  return (
    <>
      <HeroArea />
      <AboutArea />
      <Line />
      <CourseArea />
      <Hydrate state={dehydratedState}>
        <LecturesArea />
      </Hydrate>
    </>
  )
}
