import styled from 'styled-components'

const Spacer = styled.div<StyleProps>`
  width: ${props => +props.spacer / 2 || 0}px;

  @media screen {
    width: ${props => props.spacer}px;
  }
`

type StyleProps = {
  spacer: string
}

export default Spacer
