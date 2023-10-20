import Section from '@components/ui/section/Section'
import CSText from '@components/ui/text/CSText'

const AboutArea = () => {
  return (
    <Section>
      <div className="container grid items-center gap-[2rem] lg:grid-cols-2 lg:gap-7">
        <div className="order-2 lg:order-1 lg:max-w-[500px]">
          <CSText
            size={'xl'}
            color={'black'}
            weight={'bold'}
            className={'mt-[16px]'}
          >
            {'디지털 리터러시란?'}
          </CSText>
          <CSText
            size={'base'}
            color={'gray'}
            weight={'normal'}
            className={'mt-[16px]'}
          >
            {`디지털 리터러시는 읽기와 쓰기, 기술 및 비판적 사고를 사용하여 디지털 세계를 탐색하는 능력입니다.
              스마트폰, PC, e-리더 등과 같은 기술을 사용하여 정보를 찾고, 평가하고, 전달합니다.\n
              Digital Literacy 수업을 통해 인터넷을 효과적으로 탐색하는 데 필요한 기술을 습득할 수 있습니다.`}
          </CSText>
        </div>
        <div className="relative order-1 lg:order-2">
          <img
            src={'images/digital-literacy-1.png'}
            alt={'digital-literacy-1'}
            loading="lazy"
            className="h-auto w-full rounded"
          />
        </div>
      </div>
    </Section>
  )
}

export default AboutArea
