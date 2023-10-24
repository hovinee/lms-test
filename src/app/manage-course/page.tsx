import Section from '@components/ui/section/Section'
import Link from 'next/link'

const ManageLectures = () => {
  return (
    <div>
      <Link href={'/add-lectures'}>
        <button className="bg-orange">강좌 개설 버튼</button>
      </Link>
      {[0, 0, 0].map((_, key) => {
        return (
          <div
            className="mt-4 grid h-24 w-full place-items-center border border-gray-900"
            key={key}
          >
            내가 운영하는 강좌의 강좌 리스트 업
          </div>
        )
      })}
    </div>
  )
}

export default ManageLectures
