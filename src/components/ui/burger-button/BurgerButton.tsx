type TProps = {
  className?: string
  onClick: () => void
  label?: string
}

const BurgerButton = ({ className, onClick, label }: TProps) => {
  const baseClass = 'relative block overflow-hidden w-6 h-0.5 bg-black'

  return (
    <button
      aria-label={label}
      type="button"
      onClick={onClick}
      className={className}
    >
      <i className={`${baseClass}`} />
      <i className={`${baseClass} mt-[6px]`} />
      <i className={`${baseClass} mt-[6px]`} />
    </button>
  )
}

export default BurgerButton