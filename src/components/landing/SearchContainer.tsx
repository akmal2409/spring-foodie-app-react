import { useState } from 'react';
import styled from 'styled-components';
import { SearchSuggestion } from '../search-bar/Autocomplete';
import SearchBar from '../search-bar/SearchBar';
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
      { id: 'ukt78iu', label: 'Hengelo Stationsplein 23', sublabel: 'Netherlands' },
      { id: 'dhdgf65456', label: 'Hengelo Stationsplein 23', sublabel: 'Netherlands' },
    ]);
    setSearchValue(value);
  }

  const onSelectOptionHandler = (value: any) => {

  }

  return <StyledSection>
    <SearchBar
      placeholder='Enter delivery address'
      value={searchValue}
      onChange={onSearchInputHandler}
      onSelect={onSelectOptionHandler}
      icon={<MapPinIcon />}
      autocomplete
      optionIcon={<MapPinIcon />}
      suggestions={suggestions} />
  </StyledSection>;
}

export default SearchSection;