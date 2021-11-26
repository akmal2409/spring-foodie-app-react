import LandingHero from '../landing/LandingHero';
import Container from './Container';
import LandingHeader from './header/LandingHeader';

const LandingLayout = () => {
  return <Container id='wrapper'>
    <LandingHeader></LandingHeader>
    <LandingHero />

  </Container>;
}

export default LandingLayout;