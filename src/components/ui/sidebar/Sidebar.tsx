import Backdrop from '../Backdrop'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const StyledSidebarContainer = styled.div<ContainerStyleProps>`
  position: fixed;
  top: 0;
  left: 0;
  background: ${props => props.background || 'var(--theme-background-primary)'};
  width: 300px;
  max-width: 88%;
  height: 100vh;
  z-index: ${props => props.zIndex || 'var(--theme-sidebar-zIndex)'};
  transform: ${props => (props.open ? 'translateX(0)' : 'translateX(-100vh)')};
  transition: all 0.4s ease-in-out;
`

const Sidebar = (props: Props) => {
  const backdropContainer = document.getElementById('backdrop')

  return (
    <>
      {backdropContainer &&
        props.show &&
        ReactDOM.createPortal(<Backdrop onClick={props.onClose} />, backdropContainer)}
      <StyledSidebarContainer open={props.show}></StyledSidebarContainer>
    </>
  )
}

type Props = {
  show: boolean
  onClose: () => void
  background?: string
}

type ContainerStyleProps = {
  background?: string
  open: boolean
  zIndex?: number
}

export default Sidebar
