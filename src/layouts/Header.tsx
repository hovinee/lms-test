'use client'

import LeftArrow from '@components/arrow/LeftArrow'
import Logo from '@components/logo/Logo'
import SideBar from '@components/side-bar/SideBar'
import BurgerButton from '@components/ui/burger-button/BurgerButton'
import CSText from '@components/ui/text/CSText'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const Header = () => {
  const [sideBar, setSideBar] = useState<boolean>(false)
  const pathname = usePathname()

  return (
    <div className="sticky top-0 z-20 flex h-[5.6rem] w-full items-center justify-between border-b bg-white px-[1.6rem]">
      {pathname === '/add-course' ? (
        <>
          <LeftArrow />
          <CSText weight="normal" size="16" color="171717">
            강좌등록 페이지입니다
          </CSText>
        </>
      ) : (
        <Logo />
      )}

      <BurgerButton onClick={() => setSideBar(true)} />
      <SideBar sideBar={sideBar} setSideBar={setSideBar} />
    </div>
  )
}

export default Header
