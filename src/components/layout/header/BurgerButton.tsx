import styled from 'styled-components'

const StyledBurgerButton = styled.button`
  outline: none;
  border: none;
  background: transparent;
  width: 24px;
  height: 24px;
  margin: 0;
  padding: 0;

  & svg {
    width: 20px;
    height: 20px;
    fill: var(--theme-background-dark);
    cursor: pointer;
  }
`

const BurgerButton = ({onClick}: {onClick: () => void}) => {
  return (
    <StyledBurgerButton onClick={onClick}>
      <svg focusable="false" viewBox="0 0 20 20">
        <path d="M19.167 3.333H.833v2.5h18.334v-2.5zm0 5.834H.833v2.5h18.334v-2.5zM.833 15h18.334v2.5H.833V15z"></path>
      </svg>
    </StyledBurgerButton>
  )
}

export default BurgerButton
