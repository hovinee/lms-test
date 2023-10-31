import AutoSizeImage from '@components/ui/auto-size-image/AutoSizeImage'
import CSButton from '@components/ui/button/CSButton'
import CSInput from '@components/ui/input/CSInput'
import CSText from '@components/ui/text/CSText'
import { ChociesProps } from '@utils/types'

import { Dispatch, SetStateAction } from 'react'

interface Props {
  formEnabled: boolean
  editEnabled: boolean
  handleUpdate: (lectureId: number, e: React.FormEvent<HTMLFormElement>) => void
  handleSave: (e: React.FormEvent<HTMLFormElement>) => void
  setQuestionTitle: Dispatch<SetStateAction<string>>
  choices: ChociesProps[]
  questionTitle: string
  lectureTestId: number
  handleChoiceChange: (index: number, newValue: string) => void
  handleChecked: (index: number) => void
}

const AddLectureTestForm = ({
  formEnabled,
  editEnabled,
  handleUpdate,
  handleSave,
  setQuestionTitle,
  choices,
  questionTitle,
  lectureTestId,
  handleChoiceChange,
  handleChecked,
}: Props) => {
  return (
    <>
      {formEnabled && (
        <form
          onSubmit={
            editEnabled ? (e) => handleUpdate(lectureTestId, e) : handleSave
          }
        >
          <div className="w-full rounded-[2rem] bg-white px-[1.7rem] py-[1.8rem]">
            <div className="mb-[0.8rem] flex items-center gap-[0.2rem]">
              <AutoSizeImage
                src="/images/warning-triangle.png"
                className="h-[1rem] w-[1.1rem]"
              />
              <CSText weight="normal" size="10" color="565656">
                정답이 한 개인 문제 유형입니다.
              </CSText>
            </div>
            <CSInput
              type="text"
              setValue={setQuestionTitle}
              value={questionTitle}
              rounded="5"
              height="40"
              bgColor="F2F2F2"
              placeholder="질문을 적어주세요"
            />
            <div className="mb-[0.8rem] mt-[1.1rem] flex items-center gap-[0.2rem]">
              <AutoSizeImage
                src="/images/warning-triangle.png"
                className="h-[1rem] w-[1.1rem]"
              />
              <CSText weight="normal" size="10" color="565656">
                보기를 입력하고 그중 정답을 선택하세요.
              </CSText>
            </div>
            <div className="flex flex-col gap-[0.6rem]">
              {choices.map(({ choice, checked }, index) => (
                <CSInput
                  key={index}
                  type="text"
                  setValue={(newValue: string) =>
                    handleChoiceChange(index, newValue)
                  }
                  value={choice}
                  rounded="5"
                  height="40"
                  bgColor="F2F2F2"
                  placeholder={`보기 ${index + 1}`}
                  checked={checked}
                  onClick={() => handleChecked(index)}
                  choices
                />
              ))}
            </div>

            <CSButton
              width="80"
              height="23"
              rounded="5"
              className="m-auto mt-[2.2rem]"
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

export default AddLectureTestForm
