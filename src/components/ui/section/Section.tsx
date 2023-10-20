interface Props {
  children: React.ReactNode
}

const Section = ({ children }: Props) => {
  return <section className="w-full px-[1rem] py-[2rem]">{children}</section>
}

export default Section
