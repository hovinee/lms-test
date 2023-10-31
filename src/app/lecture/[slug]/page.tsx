'use client'

import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import Section from '@components/ui/section/Section'
import CSText from '@components/ui/text/CSText'
import CSButton from '@components/ui/button/CSButton'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'

const tabs = [
  { label: '강좌소개' },
  { label: '커리큘럼' },
  { label: '교수자소개' },
  { label: '추가정보' },
]

const Lecture = () => {
  const { slug } = useParams()
  const router = useRouter()
  const [selectedTab, setSelectedTab] = useState(tabs[0])

  const registerCourse = () => {
    alert('강좌가 등록 되었습니다')
    router.push('/my-course')
  }
  return (
    <>
      <div className="relative h-[22rem] w-full">
        <Image
          src={'/images/digital-literacy-1.png'}
          fill
          className="object-cover"
          alt=""
        />
      </div>
      <Section>
        <div className="mt-[2.2rem] flex items-center gap-2">
          <CSText weight="normal" size="12" color="171717">
            노준석 교수
          </CSText>
          <div className="border-BBBBBB h-4 border-l" />
          <CSText weight="normal" size="12" color="171717">
            POSTECH 포항공과대학교
          </CSText>
        </div>
        <CSText weight="bold" size="21" color="171717" className="mt-[0.6rem]">
          나노과학과 미래기술 : 원리와 기초
        </CSText>

        <CSButton className="mt-[2.4rem]" onClick={registerCourse}>
          <CSText size="18" weight="bold" color="white" className="font-inter">
            수강신청
          </CSText>
        </CSButton>

        <div className="mt-[3.9rem] flex w-full flex-col">
          <nav>
            <ul className="text-14 flex justify-between font-bold">
              {tabs.map((item) => (
                <li
                  key={item.label}
                  className={`${
                    item === selectedTab ? 'bg-[#eee]' : ''
                  } relative cursor-pointer`}
                  onClick={() => setSelectedTab(item)}
                >
                  {`${item.label}`}
                  {item === selectedTab ? (
                    <motion.div
                      className="absolute left-0 right-0 h-[3px] bg-black"
                      layoutId="underline"
                    />
                  ) : null}
                </li>
              ))}
            </ul>
          </nav>
          <main className="mt-[3rem] h-[14.4rem] w-full bg-gray-100">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTab ? selectedTab.label : 'empty'}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {selectedTab ? (
                  <CSText weight="normal" color="black" size="21">
                    {selectedTab.label}
                  </CSText>
                ) : (
                  '😋'
                )}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </Section>
    </>
  )
}

export default Lecture
