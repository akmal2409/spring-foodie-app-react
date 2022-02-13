export const ChevronUp = ({width, height, fill}: Props) => {
  const numericWidth = width ? width.replace(/\D/g, '') : 24
  const numericHeight = height ? height.replace(/\D/g, '') : 24
  return (
    <svg
      width={width || '24px'}
      height={height || '24px'}
      viewBox={`0 0 ${numericWidth} ${numericHeight}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M17 11.7494V14.916L12 11.0827L7 14.916V11.7494L12 7.91602L17 11.7494Z" fill={fill}></path>
    </svg>
  )
}

type Props = {
  width?: string
  height?: string
  fill?: string
}
