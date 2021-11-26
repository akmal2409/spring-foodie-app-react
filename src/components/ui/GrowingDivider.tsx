import styled from 'styled-components';

const GrowingDivider = styled.div<{ baseWidth?: string }>`
  flex: 1 0 ${props => props.baseWidth || '300'}px;
`;

export default GrowingDivider;