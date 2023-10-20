'use client'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper/modules'
import './style.css'
import CSText from '../text/CSText'
import Link from 'next/link'

const courses = [
  { title: '강의1: 디지털 리터러시란?' },
  { title: '강의2: 어떻게 시작할까요' },
  { title: '강의3: 예제를 보며 따라해 봅시다' },
  { title: '강의4: 혼자서 할때 주의할 점' },
]

export default () => {
  return (
    <Swiper spaceBetween={10} slidesPerView={2} className="bullet">
      {courses.map((value, index) => (
        <SwiperSlide key={index}>
          <Link href={`/lecture/${1}`}>
            <img
              src={'images/digital-literacy-1.png'}
              alt={'digital-literacy-1'}
              loading="lazy"
              className="h-auto w-full rounded"
            />
            <CSText
              weight={'normal'}
              size={'sm'}
              color={'black'}
              className="mt-4"
            >
              {value.title}
            </CSText>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
