import styled from 'styled-components'
import logoTransparentDark from '../../assets/logo-transparent-dark.svg'

const StyledLogo = styled.img`
  display: block;
  height: 24px;
  width: auto;
  aspect-ratio: auto 146 / 24;
`

const Logo = () => {
  return <StyledLogo src={logoTransparentDark} alt="logo" />
}

export default Logo
