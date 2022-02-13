import styled from 'styled-components'

export const FormControlLabel = styled.label`
  display: flex;
  font-weight: 00;
  font-size: 14px;
  line-height: 16px;
`

export const FormControl = styled.div<{layout: 'vertical' | 'horizontal'}>`
  display: flex;
  flex-direction: ${props => (props.layout === 'vertical' ? 'column' : 'row')};
  ${props => (props.layout === 'horizontal' ? 'align-items: center;' : 'justify-content: center;')}
  gap: 10px;
`
