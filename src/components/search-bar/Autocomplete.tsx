import { ReactNode } from 'react';
import styled from 'styled-components';
import Option from './Option';

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

  li {
    padding: 16px;
    height: auto;
    cursor: pointer;
    outline: none;
    transition: background 100ms ease 0s;
  }

  li:hover {
    background: #f6f6f6;
  }
`;

const Autocomplete = ({ suggestions, onClick, optionIcon }: Props) => {
  return <CompletionsContainer>
    {suggestions.map(suggestion => <Option
      onClick={onClick}
      value={suggestion.id}
      label={suggestion.label}
      key={suggestion.id}
      optionIcon={optionIcon}
      sublabel={suggestion.sublabel} />)}
  </CompletionsContainer>;
}

type Props = {
  children?: ReactNode[] | ReactNode;
  suggestions: SearchSuggestion[];
  optionIcon?: ReactNode;
  onClick: (value: any) => void;
}

export interface SearchSuggestion {
  id: any;
  label: string;
  sublabel?: string;
}

export default Autocomplete;