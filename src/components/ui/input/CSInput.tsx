import { Dispatch, SetStateAction, useState } from 'react'

interface Props {
  type: 'text' | 'password'
  placeholder?: string
  setValue: Dispatch<SetStateAction<string>> | ((newValue: string) => void)
  password?: boolean
  textColor?: string
  bgColor?: string
  rounded?: string
  height?: string
  value?: string
  choices?: boolean
  checked?: boolean
  onClick?: () => void
}

interface StringProps {
  [key: string]: string
}

const inputTextColor: StringProps = {
  C1C1C1: 'text-C1C1C1',
}

const inputbgColor: StringProps = {
  F2F2F2: 'bg-F2F2F2 ',
}

const inputRounded: StringProps = {
  '5': 'rounded-[0.5rem]',
}

const inputHeight: StringProps = {
  '40': 'h-[4rem]',
}

const CSInput = ({
  type,
  value,
  setValue,
  placeholder,
  password = false,
  textColor,
  bgColor,
  rounded,
  height,
  choices,
  onClick,
  checked,
}: Props) => {
  const [watchEnable, setWatchEnable] = useState<boolean>(false)

  const handelWatch = (e: React.MouseEvent<HTMLImageElement>) => {
    e.stopPropagation()
    setWatchEnable(!watchEnable)
  }

  return (
    <div className="relative">
      <input
        className={`${height ? inputHeight[height] : 'h-[4.4rem]'} w-full ${
          rounded ? inputRounded[rounded] : 'rounded-[1.3rem]'
        } border-none ${bgColor ? inputbgColor[bgColor] : 'bg-ECECEC'} ${
          choices ? 'pl-[3.6rem] pr-[1.4rem]' : 'px-[1.4rem]'
        } text-12 ${
          textColor ? inputTextColor[textColor] : 'text-565656'
        } focus:outline-none`}
        onChange={(e) => setValue(e.target.value)}
        type={watchEnable ? 'text' : type}
        placeholder={placeholder}
        value={value}
      />
      {password && (
        <img
          src={`/images/eye-${watchEnable ? 'open' : 'close'}.png`}
          className="absolute right-[1.4rem] top-1/2 h-[0.917rem] w-[2rem] -translate-y-1/2"
          onClick={handelWatch}
        />
      )}
      {choices && (
        <img
          src={`/images/check-circled${checked ? '' : '-none'}.png`}
          className="absolute left-[1.1rem] top-1/2 h-[1.5rem] w-[1.5rem] -translate-y-1/2"
          onClick={onClick}
        />
      )}
    </div>
  )
}

export default CSInput
