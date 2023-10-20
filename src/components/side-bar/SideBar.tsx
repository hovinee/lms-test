import CloseButton from '@components/ui/close-button/CloseButton'
import LectureButton from '@components/ui/lecutre-button/LectureButton'
import Line from '@components/ui/line/Line'
import CSText from '@components/ui/text/CSText'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { Dispatch, SetStateAction } from 'react'

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
            <div className="flex h-16 w-full items-center justify-between px-5 py-4">
              <Link
                href={'/auth/login'}
                onClick={() => setSideBar((sideBar) => !sideBar)}
              >
                <CSText
                  size="md"
                  weight="bold"
                  color="black"
                  className="leading-20"
                >
                  {'로그인>'}
                </CSText>
              </Link>
              <CloseButton onClick={() => setSideBar(!sideBar)} />
            </div>
            <div className="grid grid-cols-3 pb-4">
              <Link href={'/my-lecture'} onClick={() => setSideBar(!sideBar)}>
                <div className="border-gray-10 flex flex-col items-center justify-center border-r">
                  <LectureButton />
                  <CSText weight="normal" color="black" size="sm">
                    내 강의보기
                  </CSText>
                </div>
              </Link>
            </div>
            <Line />
            {/* <ul>
              <Link
                href={'/lectures'}
                onClick={() => setSideBar((sideBar) => !sideBar)}
              >
                <li className="border-1 mt-4 flex h-10 w-full cursor-pointer items-center border border-solid pl-4 text-lg hover:bg-yellow-200">
                  로그인
                </li>
              </Link>
              <Link
                href={'/lectures'}
                onClick={() => setSideBar((sideBar) => !sideBar)}
              >
                <li className="border-1 mt-4 flex h-10 w-full cursor-pointer items-center border border-solid pl-4 text-lg hover:bg-yellow-200">
                  회원가입
                </li>
              </Link>
              <Link
                href={'/lectures'}
                onClick={() => setSideBar((sideBar) => !sideBar)}
              >
                <li className="border-1 mt-4 flex h-10 w-full cursor-pointer items-center border border-solid pl-4 text-lg hover:bg-yellow-200">
                  나의 강좌
                </li>
              </Link>

              <li className="border-1 mt-4 flex h-10 w-full cursor-pointer items-center border border-solid pl-4 text-lg hover:bg-yellow-200">
                학습 현황
              </li>
            </ul> */}
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
