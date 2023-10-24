interface Props {
  children: React.ReactNode
  className?: string
}

const Section = ({ children, className }: Props) => {
  return (
    <section className={`w-full px-[2.1rem] ${className ?? ''}`}>
      {children}
    </section>
  )
}

export default Section
