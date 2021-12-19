import styled from 'styled-components'

export const SolidButton = styled.button<StyleProps>`
  padding: 12px 16px;
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  margin: 0;
  outline: none;
  border: none;
  font-weight: 400;
  font-size: 1.1rem;
  cursor: pointer;
  letter-spacing: normal;
  border-color: dark(rgb(118, 118, 118), rgb(133, 133, 133));
  border-style: outset;
  border-image: initial;
  border-width: 0;

  &:hover,
  &:focus {
    background: var(--theme-hover-dark);
  }
`

export const PrimaryButton = styled(SolidButton)`
  background: var(--theme-background-dark);
  color: var(--theme-text-light);
`

type StyleProps = {
  width?: string
  height?: string
}
