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
  '12': 'text-12',
  '14': 'text-14',
  '18': 'text-18',
  '21': 'text-21',
}

const fontColor: StringProps = {
  black: 'text-black',
  white: 'text-white',
  '171717': 'text-171717',
}

const fontWeight: StringProps = {
  normal: 'font-normal', //400
  semiBold: 'font-semibold', //600
  bold: 'font-bold', //700
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
