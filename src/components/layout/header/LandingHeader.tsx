import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Pusher from '../../ui/Pusher';
import RoundedButton from '../../ui/RoundedButton';

import Spacer from '../../ui/Spacer';
import Logo from '../Logo';
import BurgerButton from './BurgerButton';
import StyledHeader from './StyledHeader';

const SearchBarContainer = styled.div`
  width: 100%;
  display: none;

  @media (min-width: 768px) {
    max-width: 700px;
  }
`;

const LandingHeader = (props: Props) => {
  let background;
  let boxShadow = 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px';

  if (!props.scrolled) {
    background = 'transparent';
    boxShadow = 'none';
  }

  return <StyledHeader background={background}
    style={{ boxShadow: boxShadow }}>
    <BurgerButton />
    <Spacer spacer='32' />
    <Link to="/"><Logo /></Link>
    <Spacer spacer='128' />
    <SearchBarContainer></SearchBarContainer>
    <Pusher />
    <RoundedButton background="secondary">Sign in</RoundedButton>
  </StyledHeader>;
}

type Props = {
  children?: ReactNode[] | ReactNode;
  scrolled: boolean;
};

export default LandingHeader;