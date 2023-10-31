import CSButton from '@components/ui/button/CSButton'
import CSInput from '@components/ui/input/CSInput'
import CSText from '@components/ui/text/CSText'
import VideoUpload from '@components/ui/video-upload/VideoUpload'
import { Dispatch, SetStateAction } from 'react'

interface Props {
  formEnabled: boolean
  editEnabled: boolean
  handleUpdate: (lectureId: number, e: React.FormEvent<HTMLFormElement>) => void
  handleSave: (e: React.FormEvent<HTMLFormElement>) => void
  setLectureTitle: Dispatch<SetStateAction<string>>
  lectureTitle: string
  setUid: Dispatch<SetStateAction<string>>
  lectureId: number
}

const AddLectureForm = ({
  formEnabled,
  editEnabled,
  handleUpdate,
  handleSave,
  setLectureTitle,
  lectureTitle,
  setUid,
  lectureId,
}: Props) => {
  return (
    <>
      {formEnabled && (
        <form
          onSubmit={
            editEnabled ? (e) => handleUpdate(lectureId, e) : handleSave
          }
        >
          <div className="w-full rounded-[2rem] bg-white px-[1.7rem] py-[1.8rem]">
            <CSInput
              type="text"
              setValue={setLectureTitle}
              value={lectureTitle.split('/')[0]}
              placeholder="강의제목을 적어주세요"
              rounded="5"
              height="40"
              bgColor="F2F2F2"
            />
            <VideoUpload setUid={setUid} />
            <CSButton
              width="80"
              height="35"
              rounded="5"
              className="m-auto mt-[1.5rem]"
            >
              <CSText size="12" weight="normal" color="white">
                {editEnabled ? '수정하기' : '등록하기'}
              </CSText>
            </CSButton>
          </div>
        </form>
      )}
    </>
  )
}

export default AddLectureForm
