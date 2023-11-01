'use client'

// Import Swiper React components
import CSButton from '@components/ui/button/CSButton'
import Section from '@components/ui/section/Section'
import CSText from '@components/ui/text/CSText'
// import { useQuery } from '@tanstack/react-query'
// import { getVideos } from 'app/my-course/[slug]/page'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

import Video from '@components/ui/video-player/Video'

const tabs = [{ label: '강의목차' }, { label: '코드에디터' }, { label: '노트' }]

const args = {
  sources: [{ src: '/starwars.mp4', type: 'video/mp4' }],
  styles: {
    width: '100%',
    aspectRatio: '16 / 9',
  },
  videoOptions: {
    controls: true,
    autoplay: false,
  },
}

const getVideoInfo = [
  { title: '강의테스트1', uid: 'f406a8d33c19594e1155e10b4b3c8041' },
  { title: '강의테스트2', uid: '578645a04eba5ec76268b84f7fb1fa6f' },
  { title: '강의테스트3', uid: '5e8dd780acc6a5fd5c07d45ae551a02e' },
  { title: '강의테스트4', uid: '3bc2d15f7490c37ad354c737e6d2fafd' },
]

const VideoArea = () => {
  // const { data } = useQuery({ queryKey: ['get-video'], queryFn: getVideos })
  const [selectedTab, setSelectedTab] = useState(tabs[0])
  const [videoSource, setVideoSource] = useState([
    {
      src: `https://customer-s25nytq169jq5kv7.cloudflarestream.com/${getVideoInfo[0].uid}/manifest/video.m3u8`,
      type: 'application/x-mpegURL',
    },
  ])
  return (
    <>
      <div>
        <div className="sticky top-[5.6rem] z-10 w-full">
          <Video {...args} sources={videoSource} />
          {/* <VideoPlayer options={videoJsOptions} id={0} /> */}
        </div>
        <Section>
          <CSText weight="bold" color="black" size="16" className="mt-[1.4rem]">
            나도과학과 미래기술 : 원리와 기초
          </CSText>
          <div className="mt-[2.9rem] flex items-center gap-2">
            <CSText weight="normal" size="12" color="707070">
              수강률 10%
            </CSText>
            <div className="h-4 border-l border-BBBBBB" />
            <CSText weight="normal" size="12" color="707070">
              수강시간 4:30:20
            </CSText>
            <div className="h-4 border-l border-BBBBBB" />
            <CSText weight="normal" size="12" color="707070">
              수강시간 4:30:20
            </CSText>
          </div>
          <CSButton height="35" color="D9D9D9" className="mt-[1.3rem]">
            <CSText
              size="11"
              weight="normal"
              color="707070"
              className="font-inter"
            >
              강의정보
            </CSText>
          </CSButton>
          <div className="mt-[3.9rem] flex w-full flex-col">
            <nav>
              <ul className="flex gap-[2.5rem] text-14 font-bold">
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
          </div>
        </Section>
        <main className="mt-[1.6rem] w-full bg-gray-100">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab ? selectedTab.label : 'empty'}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {selectedTab && (
                <div className="p-[2.1rem]">
                  {getVideoInfo.map((value, index) => {
                    return (
                      <div
                        key={index}
                        onClick={() =>
                          setVideoSource([
                            {
                              src: `https://customer-s25nytq169jq5kv7.cloudflarestream.com/${value.uid}/manifest/video.m3u8`,
                              type: 'application/x-mpegURL',
                            },
                          ])
                        }
                        className="mb-[1.1rem] flex h-[9.4rem] w-full items-center justify-between rounded-[2.5rem] bg-white pl-[1.3rem] pr-[2.3rem]"
                      >
                        <CSText size="14" weight="normal" color="171717">
                          {value.title}
                        </CSText>
                        <CSText size="11" weight="normal" color="A0A0A0">
                          5:08:30
                        </CSText>
                      </div>
                    )
                  })}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </>
  )
}
export default VideoArea
