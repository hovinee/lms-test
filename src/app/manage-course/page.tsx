import AutoSizeImage from '@components/ui/auto-size-image/AutoSizeImage'
import Section from '@components/ui/section/Section'
import CSText from '@components/ui/text/CSText'
import Link from 'next/link'

const ManageLectures = () => {
  return (
    <Section>
      <Link href={'/add-course'}>
        <div className="mt-[1.4rem] flex h-[9rem] w-full flex-col items-center justify-center gap-[0.25rem] rounded-[2rem] outline-dashed outline-1">
          <AutoSizeImage
            src="/images/add-circled.png"
            className="h-[2.6rem] w-[2.6rem]"
          />
          <CSText weight="normal" size="14" color="565656">
            강좌만들기
          </CSText>
        </div>
      </Link>
      {[0, 0, 0].map((_, key) => {
        return (
          <div
            className="bg-F2F2F2 mt-[1.7rem] h-[9rem] w-full rounded-[2rem] px-[1.6rem] py-[1.8rem]"
            key={key}
          >
            <div className="flex gap-[1.2rem]">
              <div className="h-[5.3rem] w-[7.2rem] rounded-[1rem] bg-white" />
              <CSText weight="bold" size="15" color="171717">
                나노과학과 미래기술 : 원리와 기초
              </CSText>
            </div>
          </div>
        )
      })}
    </Section>
  )
}

export default ManageLectures
