import Image from 'next/image'

interface Props {
  src: string
  className?: string
  onClick?: () => void
}

const AutoSizeImage = ({ src, className, onClick }: Props) => {
  return (
    <div className={`relative ${className ?? ''}`} onClick={onClick}>
      <Image src={src} fill className="object-cover" alt="" />
    </div>
  )
}

export default AutoSizeImage
