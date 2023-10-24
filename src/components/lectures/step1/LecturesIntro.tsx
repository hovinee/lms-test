'use client'

import Section from '@components/ui/section/Section'
import { useState } from 'react'

const AddLecturesIntro = () => {
  const [imageSrc, setImageSrc]: any = useState(null)

  const onUpload = (e: any) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)

    return new Promise<void>((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result || null) // 파일의 컨텐츠
        resolve()
      }
    })
  }
  return (
    <Section>
      <div>강좌소개작성 뭐가 들어가야할까?</div>
      <div>대문이미지</div>
      <input
        accept="image/*"
        multiple
        type="file"
        onChange={(e) => onUpload(e)}
      />
      <img width={'100%'} src={imageSrc} />
      <div>강의 제목</div>
      <input placeholder="강의 제목" className="border border-orange" />
      <div>강의소개</div>
      <textarea placeholder="강의 소개" className="border border-orange" />
    </Section>
  )
}

export default AddLecturesIntro
