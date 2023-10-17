'use client'

import Chapter from '@components/lectures/chapter/Chapter'
import CSText from '@components/ui/text/CSText'

const Lectures = () => {
  return (
    <div className="mt-12 w-full px-4 lg:px-8">
      <CSText weight={'normal'} size={'xl'} color={'black'}>
        강의
      </CSText>
      <div className="mt-8 border-b border-black border-opacity-10" />
      <div className="flex justify-end">
        <button className="mt-8 h-8 w-20 rounded-md bg-slate-100">
          챕터 추가
        </button>
      </div>
      <Chapter />
    </div>
  )
}

export default Lectures
