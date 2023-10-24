import AutoSizeImage from '@components/ui/auto-size-image/AutoSizeImage'
import Section from '@components/ui/section/Section'
import CSText from '@components/ui/text/CSText'

const AboutArea = () => {
  return (
    <Section className="mt-[2.1rem]">
      <div className="container grid items-center gap-[0.9rem] lg:grid-cols-2 lg:gap-7">
        <CSText size={'21'} color={'black'} weight={'bold'}>
          {'디지털 리터러시란?'}
        </CSText>
        <div className="order-2 lg:order-1 lg:max-w-[500px]">
          <CSText size={'14'} color={'gray'} weight={'normal'}>
            {`디지털 리터러시는 읽기와 쓰기, 기술 및 비판적 사고를 사용하여 디지털 세계를 탐색하는 능력입니다.
              스마트폰, PC, e-리더 등과 같은 기술을 사용하여 정보를 찾고, 평가하고, 전달합니다.\n
              Digital Literacy 수업을 통해 인터넷을 효과적으로 탐색하는 데 필요한 기술을 습득할 수 있습니다.`}
          </CSText>
        </div>
        <AutoSizeImage
          src={'/images/computer.jpg'}
          className="order-1 h-[16.5rem] lg:order-2"
        />
      </div>
    </Section>
  )
}

export default AboutArea
