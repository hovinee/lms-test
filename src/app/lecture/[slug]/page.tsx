'use client'

import { useParams } from 'next/navigation'

const Lecture = () => {
  const { slug } = useParams()
  console.log('아이디: ', slug)
  return (
    <>
      <div>여기는 강의 소개 페이지 입니다</div>
      <button className="border bg-amber-200">강의신청</button>
    </>
  )
}

export default Lecture
