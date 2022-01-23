import styled from 'styled-components'

const convertToBackgroundVar = (backgroundType?: BackgroundType): string => {
  switch (backgroundType) {
    case 'primary':
      return '--theme-background-primary'
    case 'dark':
      return '--theme-background-dark'
    case 'secondary':
    default:
      return '--theme-background-secondary'
  }
}

const RoundedButton = styled.button<StyleProps>`
  background: var(${props => convertToBackgroundVar(props.background)});
  outline: none;
  border: none;
  border-radius: 500px;
  width: auto;
  padding: 12px 12px;
  white-space: nowrap;
  height: 40px;
  line-height: 16px;
  align-items: center;
  justify-content: center;
  display: flex;
  z-index: 0;
  cursor: pointer;

  @media (min-width: 768px) {
    font-size: ${props => props.fontSize || '16px'};
    min-height: ${props => props.minHeight || '48px'};
    padding: 12px 12px;
    font-weight: 500;
    height: ${props => props.height || 'auto'};
    width: ${props => props.width || 'auto'};
  }
`

type StyleProps = {
  background?: BackgroundType
  minWidth?: string
  minHeight?: string
  height?: string
  width?: string
  fontSize?: string
}

type BackgroundType = 'primary' | 'secondary' | 'dark'
export default RoundedButton
