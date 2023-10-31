import { Dispatch, SetStateAction } from 'react'

interface Props {
  value: string
  setValue: Dispatch<SetStateAction<string>>
}

const CSTextarea = ({ value, setValue }: Props) => {
  return (
    <textarea
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="h-[13.8rem] w-full resize-none rounded-[1.3rem] border-none bg-ECECEC px-[1.4rem] py-[1.7rem] text-12 text-565656 focus:outline-none"
    />
  )
}

export default CSTextarea
