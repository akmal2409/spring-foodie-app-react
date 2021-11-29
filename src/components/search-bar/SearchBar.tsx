import { ReactNode, useEffect, useState } from 'react';
import styled from 'styled-components';
import Autocomplete, { SearchSuggestion } from './Autocomplete';

const SearchBarContainer = styled.div`
  z-index: 0;
  position: relative;
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  & .search-bar_icon {
    position: absolute;
    top: 25%;
    left: 10px;
    width: 24px;
    height: 24px;
    bottom: 0;
    right: 0;

    & * {
      width: 24px;
      height: 24px;
    }
  }
`;

const StyledSearchBar = styled.input`
  width: 100%;
  height: 56px;
  padding: 0 0 0.4rem 3rem;
  font-size: 1.1rem;
  outline: none;
  border: none;

  &.border-bottom {
    box-shadow: rgb(0, 0, 0) 0 -2px 0 inset;
    transition: box-shadow 0.3s ease-in-out;
  }
`;

const SearchBar = (props: Props) => {
  const [classes, setClasses] = useState('');
  const [showAutcomplete, setShowAutocomplete] = useState(false);

  useEffect(() => {
    if (props.suggestions && props.suggestions.length > 0) {
      setShowAutocomplete(true);
    }
  }, [props.suggestions])

  const inputFocusHandler = () => {
    setClasses('border-bottom');
  }

  const inputBlurHandler = () => {
    setShowAutocomplete(false);
    setClasses('');
  }

  const onOptionClickHandler = (value: any) => {
    if (props.onSelect) {
      setShowAutocomplete(false);
      props.onSelect(value);
    }
  }

  return <SearchBarContainer>
    {props.icon && <span className='search-bar_icon'>{props.icon}</span>}
    <StyledSearchBar
      className={`${classes}`}
      onFocus={inputFocusHandler}
      onBlur={inputBlurHandler}
      onChange={(event) => props.onChange(event.target.value)}
      value={props.value}
      placeholder={props.placeholder || ''} />
    {props.autocomplete && props.suggestions && showAutcomplete &&
      <Autocomplete onClick={onOptionClickHandler}
        optionIcon={props.optionIcon}
        suggestions={props.suggestions} />}
  </SearchBarContainer>;
}

type Props = {
  placeholder: string;
  icon?: ReactNode;
  optionIcon?: ReactNode;
  suggestions?: SearchSuggestion[];
  autocomplete?: boolean;
  onChange: (value: string) => void;
  onSelect?: (value: any) => void;
  value: string;
};

export default SearchBar;