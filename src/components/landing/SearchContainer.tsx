import { useState } from 'react';
import styled from 'styled-components';
import { SearchSuggestion } from '../search-bar/Autocomplete';
import Option from '../search-bar/Option';
import SearchBar from '../search-bar/SearchBar';
import Dropdown from '../ui/dropdowns/Dropdown';
import CalendarIcon from '../ui/svg/CalendarIcon';
import ClockIcon from '../ui/svg/ClockIcon';
import MapPinIcon from '../ui/svg/MapPinIcon';

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
  gap: 0.2rem;
`;

const SearchSection = () => {
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const [searchValue, setSearchValue] = useState('');

  const onSearchInputHandler = (value: string) => {
    setSuggestions([
      { id: 'fasd', label: 'Hengelo Stationsplein 23', sublabel: 'Netherlands' },
      { id: '543ggds', label: 'Hengelo Stationsplein 23', sublabel: 'Netherlands' },
      { id: 'ndn55', label: 'Hengelo Stationsplein 23', sublabel: 'Netherlands' },
      { id: 'hgdfqwq', label: 'Hengelo Stationsplein 23', sublabel: 'Netherlands' },
      { id: '453jkjm', label: 'Hengelo Stationsplein 23', sublabel: 'Netherlands' },
    ]);
    setSearchValue(value);
  }

  const onSelectOptionHandler = (value: any) => {

  }

  const onClearInputHanlder = () => {
    setSearchValue('');
  }

  return <StyledSection>
    <h1 style={{ marginBottom: '24px' }}>Order food to your door</h1>
    <SearchBar
      placeholder='Enter delivery address'
      value={searchValue}
      onChange={onSearchInputHandler}
      onSelect={onSelectOptionHandler}
      icon={<MapPinIcon />}
      onClear={onClearInputHanlder}
      autocomplete
      optionIcon={<MapPinIcon />}
      suggestions={suggestions} />
    <Dropdown value={'Deliver Now'} icon={<ClockIcon />}>
      <Option value='Deliver Now' onClick={() => { }} label='Deliver Now' optionIcon={<ClockIcon />} />
      <Option value='Schedule for later' onClick={() => { }} label='Schedule for later' optionIcon={<CalendarIcon />} />
    </Dropdown>
  </StyledSection>;
}

export default SearchSection;