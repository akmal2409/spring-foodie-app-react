import styled from 'styled-components'

const Backdrop = styled.div<StyleProps>`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: ${props => props.zIndex || 'var(--theme-backdrop-zIndex)'};
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.4s ease-in;
  -webkit-transition: all 0.4s ease-in;
`

type StyleProps = {
  zIndex?: number
}

export default Backdrop
