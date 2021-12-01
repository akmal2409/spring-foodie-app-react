

const ClockIcon = ({ width, height, fill }: Props) => {
  const numericWidth = width ? width.replace(/\D/g, '') : 24;
  const numericHeight = height ? height.replace(/\D/g, '') : 24;

  return <svg
    width={width || '24px'}
    height={height || '24px'}
    fill="none"
    viewBox={`0 0 ${numericWidth} ${numericHeight}`}
    xmlns="http://www.w3.org/2000/svg"
    aria-label="When"
    role="img"
    focusable="false">
    <path
      d="M12 2.83398C6.91671 2.83398 2.83337 6.91732 2.83337 12.0007C2.83337 17.084 6.91671 21.1673 12 21.1673C17.0834 21.1673 21.1667 17.084 21.1667 12.0007C21.1667 6.91732 17.0834 2.83398 12 2.83398ZM17 13.6673H10.3334V5.33398H12.8334V11.1673H17V13.6673Z"
      fill={fill || 'var(--theme-background-dark)'}>
    </path></svg>
}

type Props = {
  width?: string;
  height?: string;
  fill?: string;
}

export default ClockIcon;