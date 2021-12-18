import {ReactNode} from 'react'
import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {toggleSidebar} from '../../../store/slices/ui.slice'
import SearchBar from '../../search-bar/SearchBar'
import Pusher from '../../ui/Pusher'
import RoundedButton from '../../ui/RoundedButton'

import Spacer from '../../ui/Spacer'
import MapPinIcon from '../../ui/svg/MapPinIcon'
import Logo from '../Logo'
import BurgerButton from './BurgerButton'
import StyledHeader from './StyledHeader'

const SearchBarContainer = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    max-width: 700px;
  }
`

const LandingHeader = (props: Props) => {
  const dispath = useDispatch()

  let background
  let boxShadow = 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'

  if (!props.scrolled) {
    background = 'transparent'
    boxShadow = 'none'
  }

  const toggleSidebarHandler = () => {
    dispath(toggleSidebar())
  }

  return (
    <StyledHeader background={background} style={{boxShadow: boxShadow}}>
      <BurgerButton onClick={toggleSidebarHandler} />
      <Spacer spacer="32" />
      <Link to="/">
        <Logo />
      </Link>
      <Spacer spacer="128" />
      <SearchBarContainer>
        {props.scrolled && (
          <SearchBar
            placeholder="Enter delivery address"
            value={''}
            onChange={() => {}}
            onSelect={() => {}}
            icon={<MapPinIcon />}
            onClear={() => {}}
            autocomplete
            background="var(--theme-background-grey)"
            optionIcon={<MapPinIcon />}
            suggestions={[]}
          />
        )}
      </SearchBarContainer>
      <Pusher />
      <RoundedButton background="secondary">Sign in</RoundedButton>
    </StyledHeader>
  )
}

type Props = {
  children?: ReactNode[] | ReactNode
  scrolled: boolean
}

export default LandingHeader
