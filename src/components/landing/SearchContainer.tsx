import {skipToken} from '@reduxjs/toolkit/dist/query'
import {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components'
import useDebounce from '../../hooks/useDebounce'
import {useGetPlacesSuggestionQuery} from '../../services/api.slice'
import {persistAddress} from '../../store/slices/ui.slice'
import {SearchSuggestion} from '../search-bar/Autocomplete'
import Option from '../search-bar/Option'
import SearchBar from '../search-bar/SearchBar'
import {PrimaryButton} from '../ui/buttons/SolidButton'
import Dropdown, {DropdownContainer} from '../ui/dropdowns/Dropdown'
import CalendarIcon from '../ui/svg/CalendarIcon'
import ClockIcon from '../ui/svg/ClockIcon'
import MapPinIcon from '../ui/svg/MapPinIcon'

const StyledSection = styled.section`
  position: absolute;
  top: 160px;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  height: auto;
  max-height: 250px;
  width: 90%;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  column-gap: 0.3rem;

  h1 {
    max-width: 75%;
    line-height: 64px;
    font-size: 52px;
    display: block;
  }

  @media (min-width: 768px) {
    max-width: 1920px;
  }
`

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${PrimaryButton} {
    margin-top: 8px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    ${DropdownContainer},
    ${PrimaryButton} {
      margin-left: 8px;
      margin-top: 0;
    }
  }
`

const SearchSection = () => {
  const [searchValue, setSearchValue] = useState('')
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([])
  const debounce = useDebounce()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {
    data: autocompleteData,
    error,
    isLoading
  } = useGetPlacesSuggestionQuery(searchValue && searchValue.length > 1 ? searchValue : skipToken)

  useEffect(() => {
    if (autocompleteData?.results) {
      const mappedSuggestions = autocompleteData.results.map(res => ({
        id: res.id,
        label: res.address.freeformAddress,
        subLabel: res.address.country,
        value: res
      }))

      setSuggestions(mappedSuggestions)
    }
  }, [autocompleteData])
  const onSearchInputHandler = (value: string) => {
    debounce(() => setSearchValue(value), 3000)
  }

  const onSelectOptionHandler = (value: any) => {
    dispatch(persistAddress(value))
    navigate(`/feed`)
  }

  const onClearInputHanlder = () => {
    setSearchValue('')
  }

  return (
    <StyledSection>
      <h1 style={{marginBottom: '24px'}}>Order food to your door</h1>
      <SearchContainer>
        <SearchBar
          placeholder="Enter delivery address"
          onChange={onSearchInputHandler}
          onSelect={onSelectOptionHandler}
          value={searchValue}
          icon={<MapPinIcon />}
          onClear={onClearInputHanlder}
          autocomplete
          optionIcon={<MapPinIcon />}
          suggestions={suggestions}
        />
        <Dropdown value={'Deliver Now'} icon={<ClockIcon />} classes="mt-4">
          <Option value="Deliver Now" onClick={() => {}} label="Deliver Now" optionIcon={<ClockIcon />} />
          <Option
            value="Schedule for later"
            onClick={() => {}}
            label="Schedule for later"
            optionIcon={<CalendarIcon />}
          />
        </Dropdown>
        <PrimaryButton width="max-content" height="56px">
          Find Food
        </PrimaryButton>
      </SearchContainer>
    </StyledSection>
  )
}

export default SearchSection
