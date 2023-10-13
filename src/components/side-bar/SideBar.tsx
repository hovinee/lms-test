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
            className="fixed right-0 top-0 z-30 h-screen w-full bg-white p-5 text-black shadow-lg sm:max-w-sm"
          >
            <button
              onClick={() => setSideBar((sideBar) => !sideBar)}
              className="float-right mb-2 block h-8 w-8 rounded-full bg-white text-black"
            >
              &times;
            </button>
            <h2 className="mt-4 text-4xl capitalize leading-loose">
              마이페이지(교수)
            </h2>
            <ul>
              <Link
                href={'/lectures'}
                onClick={() => setSideBar((sideBar) => !sideBar)}
              >
                <li className="border-1 flex h-10 w-full cursor-pointer items-center border border-solid pl-4 text-lg hover:bg-yellow-200">
                  나의 강좌
                </li>
              </Link>

              <li className="border-1 mt-4 flex h-10 w-full cursor-pointer items-center border border-solid pl-4 text-lg hover:bg-yellow-200">
                학습 현황
              </li>
            </ul>
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
            className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-transparent px-5"
          />
        </>
      )}
    </AnimatePresence>
  )
}

export default SideBar
