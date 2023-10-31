import VideoArea from '@containers/my-course/VideoArea'
import { dehydrate } from '@tanstack/react-query'
import getQueryClient from '@utils/getQueryClients'
import Hydrate from '@utils/hydrate.client'

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

const WatchMyCourse = async () => {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(['get-video'], getVideos)
  const dehydratedState = dehydrate(queryClient)
  return (
    <Hydrate state={dehydratedState}>
      <VideoArea />
    </Hydrate>
  )
}

export default WatchMyCourse
