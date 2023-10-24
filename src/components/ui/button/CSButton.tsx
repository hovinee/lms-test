interface Props {
  children: React.ReactNode
  className: string
}

const CSButton = ({ children, className }: Props) => {
  return (
    <button
      className={`grid h-[5rem] w-full place-items-center rounded-[1.3rem] bg-black ${
        className ?? ''
      }`}
    >
      {children}
    </button>
  )
}

export default CSButton
