import { useEffect, useState } from 'react';
import styled from 'styled-components';
import LandingHero from '../landing/LandingHero';
import SearchSection from '../landing/SearchContainer';
import Container from './Container';
import LandingHeader from './header/LandingHeader';

const StyledMain = styled.div`
  display: block;

  & .main-container {
    position: relative;
  }
`;

const HeaderWrapper = styled.div`
  width: 100%;
  z-index: 10;
  position: fixed;
`;

const LandingLayout = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = (event: Event) => {
      setScrolled(window.scrollY > 0);
    }
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return <Container id='wrapper'>
    <HeaderWrapper>
      <LandingHeader scrolled={scrolled} />
    </HeaderWrapper>
    <StyledMain>
      <LandingHero />
      <SearchSection />
      <h1>Hey</h1>
      <h1>Hey</h1>
      <h1>Hey</h1>
      <h1>Hey</h1>
      <h1>Hey</h1>
      <h1>Hey</h1>
    </StyledMain>
  </Container>;
}

export default LandingLayout;