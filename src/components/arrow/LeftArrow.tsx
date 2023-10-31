import AutoSizeImage from '@components/ui/auto-size-image/AutoSizeImage'
import { useRouter } from 'next/navigation'

const LeftArrow = () => {
  const router = useRouter()
  return (
    <AutoSizeImage
      src="/images/arrow-left.png"
      className="h-[2rem] w-[2.1rem]"
      onClick={() => router.back()}
    />
  )
}

export default LeftArrow
