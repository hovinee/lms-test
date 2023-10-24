import CSText from '@components/ui/text/CSText'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { Dispatch, SetStateAction } from 'react'
import MenuHeader from './MenuHeader'
import AutoSizeImage from '@components/ui/auto-size-image/AutoSizeImage'
import MenuMyCourse from './MenuMyCourse'

interface Props {
  sideBar: boolean
  setSideBar: Dispatch<SetStateAction<boolean>>
}

const SideBar = ({ sideBar, setSideBar }: Props) => {
  return (
    <AnimatePresence>
      {sideBar && (
        <>
          <motion.div
            initial={{ x: '100%' }}
            animate={{
              x: 0,
            }}
            exit={{
              x: '100%',
            }}
            transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
            className="fixed right-0 top-0 z-30 h-screen w-full bg-white text-black shadow-lg sm:max-w-sm"
          >
            <div className="w-full pl-10 pr-[1.9rem]">
              <MenuHeader setSideBar={setSideBar} />
              <MenuMyCourse setSideBar={setSideBar} />
              <div className="mt-[4.4rem]">
                <CSText size="14" weight="bold" color="171717">
                  카테고리
                </CSText>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{ type: 'spring', bounce: 0, duration: 0.2 }}
            onClick={() => setSideBar((sideBar) => !sideBar)}
            className="fixed left-0 top-0 z-20 flex h-full w-full items-center justify-center bg-black bg-opacity-20 px-5"
          />
        </>
      )}
    </AnimatePresence>
  )
}

export default SideBar
