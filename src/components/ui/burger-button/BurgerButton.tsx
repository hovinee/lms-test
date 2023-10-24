import AutoSizeImage from '../auto-size-image/AutoSizeImage'

type TProps = {
  className?: string
  onClick: () => void
}

const BurgerButton = ({ onClick }: TProps) => {
  return (
    <AutoSizeImage
      src="/images/menu.png"
      className="h-[2.1rem] w-[2.1rem] cursor-pointer"
      onClick={onClick}
    />
  )
}

export default BurgerButton
