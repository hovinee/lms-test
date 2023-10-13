'use client'

import CSText from '@components/ui/text/CSText'
import SwiperSlider from '@ui/swiper/SwiperSlider'

const CourseArea = () => {
  return (
    <section className="w-full justify-center bg-inherit px-[1rem] py-[2rem]">
      <CSText
        size={'lg'}
        color={'gray'}
        weight={'bold'}
        className={'mb-[16px]'}
      >
        {'디지털 리터러시 강의를 들어보세요.'}
      </CSText>
      <SwiperSlider />
    </section>
  )
}

export default CourseArea
