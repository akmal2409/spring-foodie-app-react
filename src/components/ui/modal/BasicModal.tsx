import {ReactNode} from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import Backdrop from '../Backdrop'

const StyledBasicModal = styled.div<StyledProps>`
  z-index: var(--theme-modal-zIndex);
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  background: var(--theme-background-primary);
  height: ${props => props.height || '250'}px;
  max-height: 100%;

  @media (min-width: 768px) {
    width: ${props => props.width || '400'}px;
  }
`

const BasicModal = (props: Props) => {
  const backdropContainer = document.getElementById('backdrop')
  const modalContainer = document.getElementById('modal')

  return (
    <>
      {backdropContainer &&
        props.show &&
        ReactDOM.createPortal(<Backdrop onClick={props.onClose} />, backdropContainer)}
      {modalContainer && ReactDOM.createPortal(<StyledBasicModal>{props.children}</StyledBasicModal>, modalContainer)}
    </>
  )
}

interface Props {
  children?: ReactNode | ReactNode[]
  show: boolean
  onClose: () => void
  height?: number
  width?: number
}

interface StyledProps {
  height?: number
  width?: number
}

export default BasicModal
