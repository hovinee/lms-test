import { Dispatch, SetStateAction, useState } from 'react'

interface Props {
  type: 'text' | 'password'
  placeholder?: string
  setValue: Dispatch<SetStateAction<string>>
  password?: boolean
}

const CSInput = ({ type, setValue, placeholder, password = false }: Props) => {
  const [watchEnable, setWatchEnabel] = useState<boolean>(false)

  const handelWatch = (e: any) => {
    e.stopPropagation()
    setWatchEnabel(!watchEnable)
  }

  return (
    <div className="relative">
      <input
        className="bg-ECECEC text-12 text-565656 h-[4.4rem] w-full rounded-[1.3rem] border-none pl-[1.4rem] focus:outline-none"
        onChange={(e) => setValue(e.target.value)}
        type={watchEnable ? 'text' : type}
        placeholder={placeholder}
      />
      {password && (
        <img
          src={`/images/eye-${watchEnable ? 'open' : 'close'}.png`}
          className="absolute right-[1.4rem] top-1/2 h-[0.917rem] w-[2rem] -translate-y-1/2"
          onClick={handelWatch}
        />
      )}
    </div>
  )
}

export default CSInput
