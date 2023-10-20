interface Props {
  weight: string
  size: string
  color: string
  children: React.ReactNode
  className?: string
}

interface StringProps {
  [key: string]: string
}

const fontSize: StringProps = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
}

const fontColor: StringProps = {
  black: 'text-black',
  white: 'text-white',
  gray: 'text-gray',
  orange: 'text-orange',
  green: 'text-green',
}

const fontWeight: StringProps = {
  normal: 'font-weight',
  semiBold: 'font-semibold',
  bold: 'font-bold',
}

const CSText = ({ weight, size, color, children, className }: Props) => {
  return (
    <p
      className={`${fontSize[size]} ${fontColor[color]} ${fontWeight[weight]} ${
        className ?? ''
      }`}
    >
      {children}
    </p>
  )
}

export default CSText
