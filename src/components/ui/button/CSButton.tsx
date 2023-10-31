interface Props {
  children: React.ReactNode
  className?: string
  width?: string
  height?: string
  color?: string
  rounded?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  type?: 'button' | 'submit'
}

interface StringProps {
  [key: string]: string
}

const buttonWidth: StringProps = {
  '54': 'w-[5.4rem]',
  '80': 'w-[8rem]',
}

const buttonHeight: StringProps = {
  '23': 'h-[2.3rem]',
  '30': 'h-[3rem]',
  '35': 'h-[3.5rem]',
}

const buttonColor: StringProps = {
  ECECEC: 'bg-ECECEC',
  A0A0A0: 'bg-A0A0A0',
  D9D9D9: 'bg-D9D9D9',
}

const buttonRounded: StringProps = {
  '5': 'rounded-[0.5rem]',
}

const CSButton = ({
  children,
  className,
  width,
  height,
  color,
  rounded,
  type,
  onClick,
}: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`grid  ${height ? buttonHeight[height] : 'h-[5rem]'} ${
        width ? buttonWidth[width] : 'w-full'
      } place-items-center ${
        rounded ? buttonRounded[rounded] : 'rounded-[1.3rem]'
      } ${color ? buttonColor[color] : 'bg-black'} ${className ?? ''}`}
    >
      {children}
    </button>
  )
}

export default CSButton
