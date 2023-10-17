import CSText from '@components/ui/text/CSText'
import VideoSwiperSlider from '@components/ui/swiper/VideoSwiperSlider'

const LecturesArea = async () => {
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
  const data = await res.json()

  return (
    <section className="w-full justify-center bg-inherit px-[1rem] py-[2rem]">
      <CSText
        size={'lg'}
        color={'gray'}
        weight={'bold'}
        className={'mb-[16px]'}
      >
        {'오늘의 추천 강의'}
      </CSText>

      <VideoSwiperSlider data={data.result} />
    </section>
  )
}

export default LecturesArea
