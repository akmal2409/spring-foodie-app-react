import Backdrop from '../Backdrop'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import {ReactNode} from 'react'

const StyledSidebarContainer = styled.div<ContainerStyleProps>`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background: ${props => props.background || 'var(--theme-background-primary)'};
  width: 300px;
  max-width: 88%;
  height: 100vh;
  z-index: ${props => props.zIndex || 'var(--theme-sidebar-zIndex)'};
  transform: ${props => (props.open ? 'translateX(0)' : 'translateX(-100vh)')};
  opacity: ${props => (props.open ? '1' : '0')};
  padding: ${props => props.padding || '24px'};
  transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
`

const Sidebar = (props: Props) => {
  const backdropContainer = document.getElementById('backdrop')

  return (
    <>
      {backdropContainer &&
        props.show &&
        ReactDOM.createPortal(<Backdrop onClick={props.onClose} />, backdropContainer)}
      <StyledSidebarContainer background={props.background} open={props.show}>
        {props.children}
      </StyledSidebarContainer>
    </>
  )
}

type Props = {
  show: boolean
  onClose: () => void
  background?: string
  children?: ReactNode[] | ReactNode
  padding?: string
}

type ContainerStyleProps = {
  background?: string
  open: boolean
  zIndex?: number
  padding?: string
}

export default Sidebar
