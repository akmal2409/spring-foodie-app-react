const AppleIcon = ({width, height, fill}: Props) => {
  const numericWidth = width ? width.replace(/\D/g, '') : 24
  const numericHeight = height ? height.replace(/\D/g, '') : 24

  return (
    <svg focusable="false" viewBox={`0 0 ${numericWidth} ${numericHeight}`}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.268 4.231c.649-.838 1.14-2.022.963-3.231-1.061.074-2.301.752-3.025 1.637-.66.802-1.201 1.994-.99 3.152 1.16.036 2.357-.66 3.052-1.558zM20 15.602c-.464 1.035-.688 1.497-1.285 2.413-.834 1.28-2.01 2.872-3.47 2.884-1.294.014-1.628-.849-3.385-.838-1.758.01-2.124.854-3.421.841-1.458-.013-2.572-1.45-3.406-2.729-2.334-3.574-2.58-7.769-1.14-10C4.916 6.587 6.53 5.66 8.048 5.66c1.543 0 2.515.852 3.793.852 1.24 0 1.995-.854 3.78-.854 1.352 0 2.784.74 3.803 2.018-3.34 1.842-2.8 6.642.576 7.925z"
      ></path>
    </svg>
  )
}

type Props = {
  width?: string
  height?: string
  fill?: string
}

export default AppleIcon
