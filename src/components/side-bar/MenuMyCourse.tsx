import AutoSizeImage from '@components/ui/auto-size-image/AutoSizeImage'
import CSText from '@components/ui/text/CSText'
import Link from 'next/link'
import { Dispatch, SetStateAction } from 'react'

interface Props {
  setSideBar: Dispatch<SetStateAction<boolean>>
}

const MenuMyCourse = ({ setSideBar }: Props) => {
  const myCourse = [
    { title: '내강의', src: '/images/book.png', link: '/my-lectures' },
    { title: '운영강좌', src: '/images/media_video.png', link: '/my-course' },
  ]

  return (
    <div className="mt-[1.5rem] grid h-[8.4rem] grid-cols-3">
      {myCourse.map(({ title, src, link }, index) => {
        return (
          <Link href={link} onClick={() => setSideBar(false)} key={index}>
            <div className="bg-F2F2F2 m-auto flex h-[8.4rem] w-[8.4rem] flex-col items-center justify-center gap-[0.5rem] rounded-full">
              <AutoSizeImage src={src} className="h-[2.24rem] w-[2.24rem]" />
              <CSText weight="normal" color="black" size="14">
                {title}
              </CSText>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default MenuMyCourse
