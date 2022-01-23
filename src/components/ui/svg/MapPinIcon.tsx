const MapPinIcon = ({width, height}: Props) => {
  const numericWidth = width ? width.replace(/\D/g, '') : 24
  const numericHeight = height ? height.replace(/\D/g, '') : 24

  return (
    <svg width={width || '24px'} height={height || '24px'}>
      <g>
        <path d="M17.583 5.166a7.896 7.896 0 00-11.166 0c-3.084 3.083-3.084 8.167 0 11.25L12 21.999l5.583-5.666c3.084-3 3.084-8.084 0-11.167zM12 12.416c-.917 0-1.667-.75-1.667-1.667 0-.916.75-1.666 1.667-1.666s1.667.75 1.667 1.666c0 .917-.75 1.667-1.667 1.667z"></path>
      </g>
      <defs>
        <clipPath id="clip0">
          <path transform="translate(2 2)" d="M0 0h20v20H0z"></path>
        </clipPath>
      </defs>
    </svg>
  )
}

type Props = {
  width?: string
  height?: string
}

export default MapPinIcon
