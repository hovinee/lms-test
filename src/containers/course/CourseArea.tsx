import Section from '@components/ui/section/Section'
import CSText from '@components/ui/text/CSText'
import SwiperSlider from '@ui/swiper/SwiperSlider'

const CourseArea = () => {
  return (
    <Section>
      <CSText
        size={'lg'}
        color={'gray'}
        weight={'bold'}
        className={'mb-[16px]'}
      >
        {'디지털 리터러시 강의'}
      </CSText>
      <SwiperSlider />
    </Section>
  )
}

export default CourseArea
