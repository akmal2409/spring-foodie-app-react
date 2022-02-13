import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {PlaceSearchAddress} from '../../../model/PlaceSearchResults'
import {toggleSidebar} from '../../../store/slices/ui.slice'
import {RootState} from '../../../store/store'
import SearchBar from '../../search-bar/SearchBar'
import {RoundedPrimaryButton} from '../../ui/buttons/SolidButton'
import RoundedButton from '../../ui/RoundedButton'
import Spacer from '../../ui/Spacer'
import CartIcon from '../../ui/svg/CartIcon'
import MapPinIcon from '../../ui/svg/MapPinIcon'
import ZoomingGlassIcon from '../../ui/svg/ZoomingGlass'
import Logo from '../Logo'
import BurgerButton from './BurgerButton'
import StyledHeader from './StyledHeader'

const HeaderWrapper = styled.header``
const DeliveryCityButton = styled(RoundedButton)`
  padding: 24px 12px;
  height: 36px;
  min-height: auto;
  min-width: auto;
  font-size: 14px;
  font-weight: 400;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 8px;
`
const SearchBarContainer = styled.div`
  flex: 1;
`

const Header = () => {
  const dispatch = useDispatch()
  const city = useSelector((state: RootState) => state.ui.deliveryAddress?.localName)

  const toggleSidebarHandler = () => {
    dispatch(toggleSidebar())
  }

  return (
    <HeaderWrapper>
      <StyledHeader>
        <BurgerButton onClick={toggleSidebarHandler} />
        <Spacer spacer="32" />
        <Link to="/">
          <Logo />
        </Link>
        <Spacer spacer="16" />
        <DeliveryCityButton>
          <MapPinIcon width="20px" height="26px" />
          {city} &nbsp;&bull;&nbsp;Now
        </DeliveryCityButton>
        <Spacer spacer="24" />
        <SearchBarContainer>
          <SearchBar
            placeholder="Food, groceries, drinks, etc"
            value={''}
            onChange={() => {}}
            onSelect={() => {}}
            icon={<ZoomingGlassIcon />}
            onClear={() => {}}
            autocomplete
            background="var(--theme-background-grey)"
            optionIcon={<ZoomingGlassIcon />}
            suggestions={[]}
          />
        </SearchBarContainer>
        <Spacer spacer="24" />
        <div style={{display: 'flex', justifyContent: 'end', alignItems: 'center', flexGrow: 0}}>
          <RoundedPrimaryButton height="36px" style={{padding: '8px 12px'}}>
            <CartIcon fill="var(--theme-background-primary)" />
            <span style={{marginLeft: '5px'}}>Cart&nbsp;&bull;&nbsp;0</span>
          </RoundedPrimaryButton>
          <Spacer spacer="24" />
          <RoundedButton background="secondary" height="36px" minHeight="auto" minWidth="auto" fontSize="14">
            Sign in
          </RoundedButton>
        </div>
      </StyledHeader>
    </HeaderWrapper>
  )
}

export default Header
