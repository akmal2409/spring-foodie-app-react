const CalendarIcon = ({width, height, fill}: Props) => {
  const numericWidth = width ? width.replace(/\D/g, '') : 24
  const numericHeight = height ? height.replace(/\D/g, '') : 24
  return (
    <svg
      width={width || '24px'}
      height={height || '24px'}
      fill="none"
      viewBox={`0 0 ${numericWidth} ${numericHeight}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.1666 8.66732V5.33398H18.6666V2.83398H16.1666V5.33398H7.83325V2.83398H5.33325V5.33398H2.83325V8.66732H21.1666ZM21.1666 21.1673H2.83325V10.334H21.1666V21.1673ZM8.66658 13.6673H6.16658V16.1673H8.66658V13.6673Z"
        fill={fill || 'var(--theme-background-dark)'}
      ></path>
    </svg>
  )
}

type Props = {
  width?: string
  height?: string
  fill?: string
}

export default CalendarIcon
