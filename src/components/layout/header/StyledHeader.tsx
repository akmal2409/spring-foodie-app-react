import styled from 'styled-components';

const StyledHeader = styled.header<StyleProps>`
  background: ${props => props.background || 'var(--theme-background-primary)'};
  z-index: 10;
  height: 96px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0 auto;
  padding: 0 16px;
  position: absolute;
  left: 0;
  top: 0;

  @media (min-width: 768px) {
    justify-content: space-between;
    padding: 0 40px;
    max-width: 1920px;
    left: calc((100vw - 1920px)/2);
  }
`;

type StyleProps = {
  background?: string;
};

export default StyledHeader;