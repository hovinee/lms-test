import CSButton from '@components/ui/button/CSButton'
import Section from '@components/ui/section/Section'
import CSText from '@components/ui/text/CSText'
import Link from 'next/link'

const MyCourse = () => {
  return (
    <Section className="mt-[1.8rem]">
      <div className="flex gap-4">
        <CSButton width="80" height="30">
          <CSText
            size="14"
            weight="normal"
            color="white"
            className="font-inter"
          >
            수강중
          </CSText>
        </CSButton>
        <CSButton width="80" height="30" color="ECECEC">
          <CSText
            size="14"
            weight="normal"
            color="black"
            className="font-inter"
          >
            수강완료
          </CSText>
        </CSButton>
      </div>
      <div className="mt-[1.4rem] h-[17rem] w-full rounded-[2rem] bg-F2F2F2 px-[2.2rem] py-[1.4rem]">
        <CSButton width="54" height="23">
          <CSText
            size="11"
            weight="normal"
            color="white"
            className="font-inter"
          >
            수강중
          </CSText>
        </CSButton>
        <CSText size="14" weight="bold" color="black" className="mt-[1.2rem]">
          나노과학과 미래기술: 원리와 기초
        </CSText>
        <Link href={'/my-course/1'}>
          <CSButton className="mt-[4.6rem] font-inter" height="35">
            <CSText size="14" weight="bold" color="white">
              온라인 강의 시청하기
            </CSText>
          </CSButton>
        </Link>
      </div>
      <div className="mt-[1.4rem] h-[17rem] w-full rounded-[2rem] bg-F2F2F2 px-[2.2rem] py-[1.4rem]">
        <CSButton width="54" height="23" color="A0A0A0">
          <CSText
            size="11"
            weight="normal"
            color="white"
            className="font-inter"
          >
            수강완료
          </CSText>
        </CSButton>
        <CSText size="14" weight="bold" color="black" className="mt-[1.2rem]">
          나노과학과 미래기술: 원리와 기초
        </CSText>
        <CSButton className="mt-[4.6rem] font-inter" height="35" color="A0A0A0">
          <CSText size="14" weight="bold" color="white">
            온라인 강의 시청하기
          </CSText>
        </CSButton>
      </div>
    </Section>
  )
}

export default MyCourse
