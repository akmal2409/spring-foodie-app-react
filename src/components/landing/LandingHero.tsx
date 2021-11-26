import styled from 'styled-components';
import leftImage from '../../assets/fries-background.svg';
import rightImage from '../../assets/burger-backgorund.svg';
import GrowingDivider from '../ui/GrowingDivider';

const StyledImageContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: var(--theme-background-beige);
  overflow: hidden;
  display: flex;
  & img {
    object-fit: cover;
    height: 100%;
  }
`;

const HeroImageContainer = () => {
  return <StyledImageContainer>
    <img src={leftImage} alt="French Fries Full Height" />
    <GrowingDivider />
    <img src={rightImage} alt="Burger Full Height" />
  </StyledImageContainer>;
}

const LandingHero = () => {
  return <>
    <HeroImageContainer />

  </>;
}

export default LandingHero;