import CSText from '@components/ui/text/CSText'
import VideoSwiperSlider from '@components/swiper/VideoSwiperSlider'
import Section from '@components/ui/section/Section'
import Image from 'next/image'

const TodayCourseArea = () => {
  return (
    <Section className="mt-[2.7rem] pb-[2.7rem]">
      <CSText size={'14'} color={'black'} weight={'bold'}>
        {'오늘의 추천 강의'}
      </CSText>

      <div className="relative mt-[0.9rem] h-[16.5rem] w-full">
        <Image
          src={'/images/school.jpg'}
          fill
          className="object-cover"
          alt=""
        />
      </div>
      <CSText
        size={'14'}
        color={'black'}
        weight={'normal'}
        className="mt-[0.9rem]"
      >
        {'추천 강좌: 심리상담 전 알아야 할 것'}
      </CSText>

      {/* <VideoSwiperSlider/> */}
    </Section>
  )
}

export default TodayCourseArea
