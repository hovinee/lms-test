'use client'

import Logo from '@components/logo/Logo'
import SideBar from '@components/side-bar/SideBar'
import BurgerButton from '@components/ui/burger-button/BurgerButton'
import { useState } from 'react'

const Header = () => {
  const [sideBar, setSideBar] = useState<boolean>(false)

  return (
    <div className="sticky top-0 z-20 flex h-[5.6rem] w-full items-center justify-between bg-white px-[1.6rem]">
      <Logo />
      <BurgerButton onClick={() => setSideBar(true)} />
      <SideBar sideBar={sideBar} setSideBar={setSideBar} />
    </div>
  )
}

export default Header
