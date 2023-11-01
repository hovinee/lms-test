'use client'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import './style.css'
import CSText from '../ui/text/CSText'
import Link from 'next/link'
import AutoSizeImage from '@components/ui/auto-size-image/AutoSizeImage'

const courses = [
  { title: '디지털 리터러시란?' },
  { title: '어떻게 시작할까요' },
  { title: '예제를 보며 따라해 봅시다' },
  { title: '혼자서 할때 주의할 점' },
]

export default () => {
  return (
    <Swiper spaceBetween={8} slidesPerView={2} className="bullet">
      {courses.map((value, index) => (
        <SwiperSlide key={index}>
          <Link href={`/lecture/${1}`}>
            <AutoSizeImage
              src="/images/digital-literacy-1.png"
              className="h-[9.6rem] w-full"
              roundedTop="0.6"
            />

            <div className="border-black-10 rounded-b-[0.6rem] border-x border-b p-[0.8rem]">
              <CSText weight="normal" size="12" color="black">
                {`강의${index + 1}`}
              </CSText>
              <CSText
                weight="bold"
                size="14"
                color="black"
                className="truncate"
              >
                {value.title}
              </CSText>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
