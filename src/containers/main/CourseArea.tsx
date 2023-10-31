import Section from '@components/ui/section/Section'
import CSText from '@components/ui/text/CSText'
import SwiperSlider from '@components/swiper/SwiperSlider'

const CourseArea = () => {
  return (
    <Section className="mt-[2.1rem]">
      <CSText
        size={'14'}
        color={'gray'}
        weight={'bold'}
        className={'mb-[1.6rem]'}
      >
        {'디지털 리터러시 강의'}
      </CSText>
      <SwiperSlider />
    </Section>
  )
}

export default CourseArea
