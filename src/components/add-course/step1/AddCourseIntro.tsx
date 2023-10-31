'use client'

import AutoSizeImage from '@components/ui/auto-size-image/AutoSizeImage'
import CSInput from '@components/ui/input/CSInput'
import Section from '@components/ui/section/Section'
import CSText from '@components/ui/text/CSText'
import CSTextarea from '@components/ui/textarea/CSTextarea'
import { ChangeEvent, Dispatch, SetStateAction } from 'react'

interface Props {
  setThumbnailImg: Dispatch<SetStateAction<any>>
  thumbnailImg: string
  setCourseTitle: Dispatch<SetStateAction<string>>
  setCourseIntro: Dispatch<SetStateAction<string>>
  courseIntro: string
}
const AddCourseIntro = ({
  setThumbnailImg,
  thumbnailImg,
  setCourseTitle,
  setCourseIntro,
  courseIntro,
}: Props) => {
  const onUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        setThumbnailImg(reader.result)
      }
    }
  }
  return (
    <Section className="pt-[1.3rem]">
      <form
        className={`flex h-[9rem] w-full flex-col items-center justify-center gap-[0.25rem] rounded-[2rem]  ${
          thumbnailImg ? '' : 'outline-dashed outline-1'
        }`}
      >
        {thumbnailImg ? (
          <AutoSizeImage
            src={thumbnailImg}
            className="h-full w-full"
            rounded="2"
          />
        ) : (
          <>
            <input
              className="hidden"
              type="file"
              accept="image/*"
              id="thumnail"
              onChange={onUpload}
            />
            <label htmlFor="thumnail">
              <AutoSizeImage
                src="/images/add-media-image.png"
                className="m-auto mb-[0.8rem] h-[2.6rem] w-[2.6rem]"
              />
              <CSText weight="normal" size="14" color="565656">
                썸네일 이미지를 등록해주세요
              </CSText>
            </label>
          </>
        )}
      </form>
      <CSText
        size="14"
        weight="normal"
        color="515151"
        className="mb-[0.8rem] mt-[2.9rem] font-inter"
      >
        강좌 제목을 적어주세요
      </CSText>
      <CSInput type="text" setValue={setCourseTitle} />
      <CSText
        size="14"
        weight="normal"
        color="515151"
        className="mb-[0.8rem] mt-[2.9rem] font-inter"
      >
        강좌 소개를 작성해주세요
      </CSText>
      <CSTextarea value={courseIntro} setValue={setCourseIntro} />
    </Section>
  )
}

export default AddCourseIntro
