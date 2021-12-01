import styled from 'styled-components';

const Spacer = styled.div<StyleProps>`
  width: ${props => props.spacer}px;
`

type StyleProps = {
  spacer: string;
};


export default Spacer;