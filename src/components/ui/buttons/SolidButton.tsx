import styled from 'styled-components';

const SolidButton = styled.button<StyleProps>`
  
`;

type StyleProps = {
  width?: string;
  height?: string;
  color?: string;
  background?: string;
};

export default SolidButton;