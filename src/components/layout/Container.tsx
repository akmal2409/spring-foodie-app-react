import styled from 'styled-components';

const Container = styled.div<StyleProps>`
  display: flex;
  flex-direction: ${props => props.flexDirection || 'column'};
  position: relative;
  min-width: 100%;
`;

type StyleProps = {
  flexDirection?: string;
};

export default Container;