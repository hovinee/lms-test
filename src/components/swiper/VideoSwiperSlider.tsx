'use client'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import VideoPlayer from '../ui/video-player/VideoPlayer'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { getVideos } from 'app/my-course/[slug]/page'

const VideoSwiperSlider = () => {
  const [num, setNum] = useState<number>(1000)
  const { data } = useQuery({
    queryKey: ['get-video'],
    queryFn: async () => {
      //TODO: fucntion 만들기 업데이트 현황 불러오기
      const data = await getVideos()
      let test = []
      data.filter((value: any) => {
        if (value.status.pctComplete === '100.000000') test.push('100')
      })
      if (test.length === data.length) setNum(0)
      return data
    },
    refetchInterval: num,
    refetchIntervalInBackground: true,
  })

  return (
    <>
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        spaceBetween={50}
        slidesPerView={1}
        className="bullet"
      >
        {data.map((value: any, index: number) => {
          const videoJsOptions = {
            sources: [
              {
                src: `https://customer-s25nytq169jq5kv7.cloudflarestream.com/${value.uid}/manifest/video.m3u8`,
                type: 'application/x-mpegURL',
              },
            ],
          }

          return (
            <SwiperSlide key={index}>
              <div className="relative mb-16 h-[10rem] w-full" key={index}>
                <div>{`추천 강좌: ${value.meta.filename.split('.')[0]}`}</div>
                {value.status.state === 'ready' ? (
                  <VideoPlayer options={videoJsOptions} id={value.uid} />
                ) : (
                  <div className="h-full w-full bg-black bg-opacity-50 text-center leading-[10rem]">
                    인코딩 ..
                  </div>
                )}
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}
export default VideoSwiperSlider
