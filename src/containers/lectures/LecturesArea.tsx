import CSText from '@components/ui/text/CSText'
import VideoSwiperSlider from '@components/ui/swiper/VideoSwiperSlider'
import Section from '@components/ui/section/Section'

const LecturesArea = () => {
  return (
    <Section>
      <CSText
        size={'lg'}
        color={'gray'}
        weight={'bold'}
        className={'mb-[16px]'}
      >
        {'오늘의 추천 강의'}
      </CSText>
      <VideoSwiperSlider />
    </Section>
  )
}

export default LecturesArea
