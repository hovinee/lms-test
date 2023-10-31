'use client'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Pagination, Autoplay } from 'swiper/modules'
import './style.css'
import Image from 'next/image'
import CSText from '../ui/text/CSText'
import { motion } from 'framer-motion'
import { useState } from 'react'

const courses = [
  {
    title: '디지털 리터러시의 강좌를 찾아보세요.',
    description:
      '인터넷 및 소프트웨어를 사용하여 다른 사람과 협력하고 정보를 발견 및 전달하는 능력을 배우세요.',
    src: '/images/digital-literacy.png',
  },
  {
    title: '디지털 리터러시의 강좌를 찾아보세요.',
    description:
      '인터넷 및 소프트웨어를 사용하여 다른 사람과 협력하고 정보를 발견 및 전달하는 능력을 배우세요.',
    src: '/images/school.jpg',
  },
  {
    title: '디지털 리터러시의 강좌를 찾아보세요.',
    description:
      '인터넷 및 소프트웨어를 사용하여 다른 사람과 협력하고 정보를 발견 및 전달하는 능력을 배우세요.',
    src: '/images/computer.jpg',
  },
]

const BannerSwiper = () => {
  const [slideIndex, setSlideIndex] = useState<number>(0)
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={true}
      spaceBetween={50}
      slidesPerView={1}
      className="bullet"
      autoplay={{
        delay: 5000,
        disableOnInteraction: false, // 사용자 상호 작용 시 자동 슬라이드 중단 여부
      }}
      loop={true}
      onSlideChange={(swiper) => {
        setSlideIndex(swiper.realIndex)
      }}
    >
      {courses.map((course, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full">
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: slideIndex === index ? 1.1 : 1 }}
              transition={{ duration: 5 }}
            >
              <motion.img
                src={course.src}
                alt={'digital-literacy'}
                className="h-[22rem] w-full object-cover"
              />
            </motion.div>
            <div className="text-wh absolute bottom-0 left-0 right-0 top-0 flex flex-col items-center justify-center bg-black bg-opacity-20">
              <CSText weight={'bold'} size={'21'} color={'white'}>
                {course.title}
              </CSText>
              <CSText
                weight={'normal'}
                size={'14'}
                color={'white'}
                className="text-center"
              >
                {course.description}
              </CSText>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default BannerSwiper
