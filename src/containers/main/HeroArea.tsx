import CSText from '@components/ui/text/CSText'

const HeroArea = () => {
  return (
    <div className="relative py-[120px] md:py-[150px] lg:py-[170px] xl:py-[240px]">
      <div className="absolute inset-0 z-10">
        <img
          src={'/images/digital-literacy.png'}
          alt={'digital-literacy'}
          loading="eager"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="container relative z-20 text-center">
        <CSText size={'base'} color={'gray'} weight={'bold'}>
          {'디지털 리터러시의 강좌를 찾아보세요.'}
        </CSText>
        <CSText
          size={'lg'}
          color={'black'}
          weight={'bold'}
          className={'mt-[16px]'}
        >
          {
            '인터넷 및 소프트웨어를 사용하여 다른 사람과 협력하고 정보를 발견 및 전달하는 능력을 배우세요.'
          }
        </CSText>
      </div>
    </div>
  )
}

export default HeroArea
