import Image from 'next/image'

interface Props {
  src: string
  className?: string
  classNameImg?: string
  onClick?: () => void
  rounded?: string
  roundedTop?: string
}

interface StringProps {
  [key: string]: string
}

const borderRadius: StringProps = {
  '2': 'rounded-[2rem]',
}

const borderTopRadius: StringProps = {
  '0.6': 'rounded-t-[0.6rem]',
}
const AutoSizeImage = ({
  src,
  className,
  onClick,
  rounded,
  roundedTop,
}: Props) => {
  return (
    <div className={`relative ${className ?? ''}`} onClick={onClick}>
      <Image
        src={src}
        fill
        className={`object-cover ${rounded ? borderRadius[rounded] : ''} ${
          roundedTop ? borderTopRadius[roundedTop] : ''
        }`}
        alt=""
      />
    </div>
  )
}

export default AutoSizeImage
