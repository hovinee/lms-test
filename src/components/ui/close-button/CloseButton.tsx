interface Props {
  onClick: () => void
}

const CloseButton = ({ onClick }: Props) => {
  return (
    <div onClick={onClick}>
      <svg
        data-v-4f3fff90=""
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="sign-processor-icon"
      >
        <path
          data-v-4f3fff90=""
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.882 5.151L12 11.27l6.117-6.118c.18-.179.459-.199.66-.06l.072.06c.179.18.199.458.06.66l-.06.071L12.73 12l6.118 6.117a.517.517 0 11-.732.732L12 12.73l-6.118 6.118c-.179.179-.458.199-.659.06l-.072-.06a.517.517 0 01-.06-.66l.06-.072L11.27 12 5.151 5.882a.517.517 0 11.731-.73z"
          fill="#171717"
        />
      </svg>
    </div>
  )
}

export default CloseButton
