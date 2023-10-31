import Image from 'next/image'

interface Props {
  src: string
  className?: string
  onClick?: () => void
  rounded?: string
}

interface StringProps {
  [key: string]: string
}

const borderRadius: StringProps = {
  '2': 'rounded-[2rem]',
}
const AutoSizeImage = ({ src, className, onClick, rounded }: Props) => {
  return (
    <div className={`relative ${className ?? ''}`} onClick={onClick}>
      <Image
        src={src}
        fill
        className={`object-cover ${rounded ? borderRadius[rounded] : ''}`}
        alt=""
      />
    </div>
  )
}

export default AutoSizeImage
