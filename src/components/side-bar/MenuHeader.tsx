import AutoSizeImage from '@components/ui/auto-size-image/AutoSizeImage'
import CloseButton from '@components/ui/close-button/CloseButton'
import CSText from '@components/ui/text/CSText'
import Link from 'next/link'
import { Dispatch, SetStateAction } from 'react'

interface Props {
  setSideBar: Dispatch<SetStateAction<boolean>>
}
const MenuHeader = ({ setSideBar }: Props) => {
  return (
    <div className="border-BBBBBB flex h-[5.6rem] items-center justify-between border-b">
      <Link href={'/auth/login'} onClick={() => setSideBar(false)}>
        <div className="flex items-center gap-1">
          <CSText size="14" weight="normal" color="black">
            {'로그인'}
          </CSText>
          <AutoSizeImage
            src="/images/nav-arrow-right.png"
            className="h-[0.7rem] w-2"
          />
        </div>
      </Link>
      <CloseButton onClick={() => setSideBar(false)} />
    </div>
  )
}

export default MenuHeader
