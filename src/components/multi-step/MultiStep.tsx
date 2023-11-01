import CSText from '@components/ui/text/CSText'

interface Props {
  step: number[]
}

const MultiStep = ({ step }: Props) => {
  return (
    <div className="flex justify-between bg-white px-[3.5rem] pb-[1.1rem] pt-[2.9rem]">
      {Array.from({ length: 3 }).map((_, index) => {
        return (
          <div key={index}>
            <div className="relative flex items-center justify-center">
              <div
                className={`z-10 grid h-[2rem] w-[2rem] place-items-center rounded-full ${
                  step.includes(index) ? 'bg-black' : 'bg-ECECEC'
                }`}
              >
                <CSText weight="normal" size="12" color="white">
                  {index + 1}
                </CSText>
              </div>
              {index < 2 && (
                <div
                  className={`${
                    step.includes(index + 1) ? 'bg-black' : 'bg-ECECEC'
                  } absolute left-[2rem] h-[0.2rem]
                  w-[calc((100vw-13rem)/2)]`}
                />
              )}
            </div>
            <CSText
              weight="normal"
              size="10"
              color="black"
              className="mt-[0.3rem]"
            >
              Step{index + 1}
            </CSText>
          </div>
        )
      })}
    </div>
  )
}

export default MultiStep
