import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAAAAABXZoBIAAAAdklEQVR4AWP4jwfQTVLvHh5JTYZHeHQyMDzDJ7kEn+QKkiRvQMAzbJJpDBDgiSGJkGMIw5SsYoABTxIdtK67u3sFLsl7IBMLcHnlEVwWUxIhiymJkIVIHoBLosqCJGchogxVNu0/WA7Tn28PAMH/G3jT0MBKAgB0M567vZcbegAAAABJRU5ErkJggg=="
        alt="Logo"
        width={30}
        height={30}
      />
    </Link>
  )
}

export default Logo
