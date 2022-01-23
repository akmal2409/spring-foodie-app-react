import styled from 'styled-components'

export const SolidButton = styled.button<StyleProps>`
  padding: 12px 16px;
  width: 100%;
  height: ${props => props.height || 'auto'};
  margin: 0;
  outline: none;
  border: none;
  font-weight: 400;
  cursor: pointer;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  letter-spacing: normal;
  border-color: dark(rgb(118, 118, 118), rgb(133, 133, 133));
  border-style: outset;
  border-image: initial;
  border-width: 0;

  &:hover,
  &:focus {
    background: var(--theme-hover-dark);
  }

  @media (min-width: 768px) {
    width: ${props => props.width || 'auto'};
  }
`

export const PrimaryButton = styled(SolidButton)`
  background: var(--theme-background-dark);
  color: var(--theme-text-light);

  * {
    color: var(--theme-text-light);
  }
`

export const RoundedPrimaryButton = styled(PrimaryButton)`
  border-radius: 500px;
`

type StyleProps = {
  width?: string
  height?: string
}
