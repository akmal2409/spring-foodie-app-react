import styled from 'styled-components'
import {FormControl, FormControlLabel} from './FormControl'
import Option from './option.model'
import Radio from './RadioButton'

const RadioGroup = (props: Props) => {
  return (
    <RadioGroupContainer layout={props.layout}>
      {props.options.map(option => (
        <FormControl layout="horizontal" key={option.label}>
          <Radio checked={option.value === props.value} value={option.value} onChange={props.onChange} />
          <FormControlLabel>{option.label}</FormControlLabel>
        </FormControl>
      ))}
    </RadioGroupContainer>
  )
}

const RadioGroupContainer = styled.div<{layout: string}>`
  display: flex;
  flex-direction: ${props => (props.layout === 'horizontal' ? 'row' : 'column')};
  gap: 15px;
  justify-content: flex-start;
`

interface Props {
  options: Array<Option>
  layout: 'horizontal' | 'vertical'
  value: any
  onChange: (value: any) => any
}

export default RadioGroup
