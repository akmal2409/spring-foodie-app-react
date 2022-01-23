import {ReactNode, useEffect, useState} from 'react'
import styled from 'styled-components'
import {TextButton} from '../ui/buttons/Buttons'
import Spacer from '../ui/Spacer'
import Autocomplete, {SearchSuggestion} from './Autocomplete'

type ContainerStyleProps = {
  minWidth?: string
}

const SearchBarContainer = styled.div<ContainerStyleProps>`
  position: relative;
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  flex: 1;

  & .search-bar_icon {
    position: absolute;
    top: 25%;
    left: 15px;
    width: 24px;
    height: 24px;
    bottom: 0;
    right: 0;

    & * {
      width: 24px;
      height: 24px;
    }
  }

  @media (min-width: 768px) {
    min-width: ${props => props.minWidth || '545px'};
  }
`

const StyledSearchBar = styled.input<{background?: string}>`
  width: 100%;
  height: 56px;
  padding: 0.2rem 0 0.4rem 3.6rem;
  outline: none;
  border: none;
  background: ${props => props.background || 'var(--theme-background-primary)'};

  &.border-bottom {
    box-shadow: rgb(0, 0, 0) 0 -2px 0 inset;
    transition: box-shadow 0.3s ease-in-out;
  }
`

const ClearButton = styled(TextButton)`
  position: absolute;
  right: 15px;
  top: 30%;
`

const SearchBar = (props: Props) => {
  const [classes, setClasses] = useState('')
  const [showAutcomplete, setShowAutocomplete] = useState(false)

  const showClearButton = props.value != null && props.value.trim().length > 0

  useEffect(() => {
    if (props.suggestions && props.suggestions.length > 0) {
      setShowAutocomplete(true)
    }
  }, [props.suggestions])

  const inputFocusHandler = () => {
    setClasses('border-bottom')
    if (props.suggestions && props.suggestions.length > 0) {
      setShowAutocomplete(true)
    }
  }

  const inputBlurHandler = () => {
    setClasses('')
  }

  const onOptionClickHandler = (value: any) => {
    if (props.onSelect) {
      props.onSelect(value)
      setShowAutocomplete(false)
    }
  }

  return (
    <SearchBarContainer minWidth={props.minWidth}>
      <Spacer spacer="4" />
      {props.icon && <span className="search-bar_icon">{props.icon}</span>}
      <StyledSearchBar
        background={props.background}
        className={`${classes}`}
        onFocus={inputFocusHandler}
        onBlur={inputBlurHandler}
        onChange={event => props.onChange(event.target.value)}
        placeholder={props.placeholder || ''}
      />
      {props.autocomplete && props.suggestions && showAutcomplete && (
        <Autocomplete onClick={onOptionClickHandler} optionIcon={props.optionIcon} suggestions={props.suggestions} />
      )}
      {showClearButton && <ClearButton onClick={props.onClear}>Clear</ClearButton>}
    </SearchBarContainer>
  )
}

type Props = {
  placeholder: string
  icon?: ReactNode
  optionIcon?: ReactNode
  suggestions?: SearchSuggestion[]
  autocomplete?: boolean
  onChange: (value: string) => void
  onSelect?: (value: any) => void
  onClear: () => void
  background?: string
  minWidth?: string
  maxWidth?: string
  value: string
}

export default SearchBar
