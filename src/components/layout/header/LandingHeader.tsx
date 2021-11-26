import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Pusher from '../../ui/Pusher';
import RoundedButton from '../../ui/RoundedButton';

import Spacer from '../../ui/Spacer';
import Logo from '../Logo';
import BurgerButton from './BurgerButton';
import StyledHeader from './StyledHeader';

const LandingHeader = (props: Props) => {
  return <StyledHeader background="transparent">
    <BurgerButton />
    <Spacer spacer='32' />
    <Link to="/"><Logo /></Link>
    <Spacer spacer='128' />
    <Pusher />
    <RoundedButton background="secondary">Sign in</RoundedButton>
  </StyledHeader>;
}

type Props = {
  children?: ReactNode[] | ReactNode
};

export default LandingHeader;