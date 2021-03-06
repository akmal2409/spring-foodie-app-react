const CartIcon = ({classes, fill}: Props) => {
  return (
    <svg className={classes || ''} width="16px" height="16px" fill={fill || '#000'}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.666 11.333h10.333l1.334-8h-11l-.267-2h-3.4v2h1.667l1.333 8zm1.333 3.334A1.333 1.333 0 105 12a1.333 1.333 0 000 2.667zm9.334-1.334a1.333 1.333 0 11-2.667 0 1.333 1.333 0 012.667 0z"
      ></path>
    </svg>
  )
}

interface Props {
  classes?: string
  fill?: string
}

export default CartIcon
