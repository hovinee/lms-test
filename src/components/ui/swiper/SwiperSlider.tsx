'use client'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper/modules'
import './style.css'

const courses = [
  { title: '강의1: 디지털 리터러시란?', description: '설명: ...' },
  { title: '강의2: 디지털 리터러시란2?', description: '설명: ...' },
  { title: '강의3: 디지털 리터러시란4?', description: '설명: ...' },
  { title: '강의4: 디지털 리터러시란5?', description: '설명: ...' },
  { title: '강의5: 디지털 리터러시란6?', description: '설명: ...' },
]

export default () => {
  return (
    <Swiper
      modules={[Pagination]}
      pagination={true}
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
      {courses.map((value, index) => (
        <SwiperSlide key={index}>
          <img
            src={'images/digital-literacy-1.png'}
            alt={'digital-literacy-1'}
            width={570}
            height={360}
            loading="lazy"
            className="rounded"
          />
          <div>{value.title} </div>
          <div>{value.description}</div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
