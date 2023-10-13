'use client'

import Logo from '@components/logo/Logo'
import SideBar from '@components/side-bar/SideBar'
import BurgerButton from '@components/ui/burger-button/BurgerButton'
import { useState } from 'react'

const Header = () => {
  const [sideBar, setSideBar] = useState<boolean>(false)
  const [offcanvas, setOffcanvas] = useState<boolean>(false)

  return (
    <div className="flex w-full items-center justify-between bg-white px-[24px] py-[16px]">
      <Logo />
      <BurgerButton onClick={() => setSideBar(true)} />
      <SideBar sideBar={sideBar} setSideBar={setSideBar} />
    </div>
  )
}

export default Header
