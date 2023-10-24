import AutoSizeImage from '../auto-size-image/AutoSizeImage'

interface Props {
  onClick: () => void
}

const CloseButton = ({ onClick }: Props) => {
  return (
    <AutoSizeImage
      src="/images/close.png"
      className="h-[1.8rem] w-[1.8rem]"
      onClick={onClick}
    />
  )
}

export default CloseButton
