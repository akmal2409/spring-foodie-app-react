import {ReactNode} from 'react'
import styled from 'styled-components'
import Option from './Option'

const CompletionsContainer = styled.ul`
  position: absolute;
  width: 100%;
  top: 100.3%;
  right: 0;
  left: 0;
  max-height: 500px;
  overflow-y: auto;
  overflow-x: hidden;
  background: var(--theme-background-primary);
  list-style: none;
  margin: 0;
  padding: 0;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  animation: fadein 150ms forwards;

  @keyframes fadein {
    from {
      opacity: 0;
      transform: translateY(-1rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

const Autocomplete = ({suggestions, onClick, optionIcon}: Props) => {
  return (
    <CompletionsContainer>
      {suggestions.map(suggestion => (
        <Option
          onClick={onClick}
          value={suggestion.value}
          label={suggestion.label}
          key={suggestion.id}
          optionIcon={optionIcon}
          sublabel={suggestion.sublabel}
        />
      ))}
    </CompletionsContainer>
  )
}

type Props = {
  children?: ReactNode[] | ReactNode
  suggestions: SearchSuggestion[]
  optionIcon?: ReactNode
  onClick: (value: any) => void
}

export interface SearchSuggestion {
  id: any
  label: string
  sublabel?: string
  value: any
}

export default Autocomplete
