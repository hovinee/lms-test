'use client'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import VideoPlayer from '../video-player/VideoPlayer'

const VideoSwiperSlider = ({ data }: any) => {
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
                  <VideoPlayer options={videoJsOptions} />
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
