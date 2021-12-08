import styled from 'styled-components';
import logoTransparentDark from '../../assets/logo-transparent-dark.svg';

const StyledLogo = styled.img`
  display: block;
  height: 24px;
  width: 300px;

  @media (min-width: 768px) {
    width: auto;
  }
`;

const Logo = () => {
  return <StyledLogo src={logoTransparentDark} alt="logo" />;
}

export default Logo;