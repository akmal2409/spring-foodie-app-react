import styled from 'styled-components';

const Spacer = styled.div<StyleProps>`
  width: ${props => props.spacer}px;
`

type StyleProps = {
  spacer: '128' | '32' | '16';
};


export default Spacer;