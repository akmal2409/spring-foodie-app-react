import styled from 'styled-components'

const StyledRadio = styled.div`
  width: 20px;
  height: 20px;
  border: 3px solid var(--theme-text-secondary);
  border-radius: 50%;
  box-sizing: border-box;

  &.checked {
    border: 7px solid var(--theme-background-dark);
  }
`

const Radio = ({onChange, value, checked, name}: Props) => {
  const className = checked ? 'checked' : ''
  return <StyledRadio className={className} onClick={() => onChange(value)} />
}

interface Props {
  onChange: (value: any) => any
  value: any
  checked?: boolean
  name?: string
}

export default Radio
