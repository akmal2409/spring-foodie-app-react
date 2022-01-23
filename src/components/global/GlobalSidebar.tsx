import {useDispatch, useSelector} from 'react-redux'
import {toggleSidebar} from '../../store/slices/ui.slice'
import {RootState} from '../../store/store'
import {PrimaryButton} from '../ui/buttons/SolidButton'
import {MenuItem, MenuItemContainer} from '../ui/sidebar/MenuItem'
import Sidebar from '../ui/sidebar/Sidebar'
import logoDark from '../../assets/logo-dark.svg'
import styled from 'styled-components'
import RoundedButton from '../ui/RoundedButton'
import AppleIcon from '../ui/svg/AppleIcon'

const StyledMobileAppSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  & img {
    width: 56px;
    height: 56px;
  }

  p {
    font-weight: 500;
    margin: 0.5rem 1rem;
    font-size: 16px;
  }
`

const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
`

const GlobalSidebar = () => {
  const showSidebar = useSelector((state: RootState) => state.ui.showSidebar)
  const dispatch = useDispatch()

  const toggleSidebarHandler = () => {
    dispatch(toggleSidebar())
  }

  return (
    <Sidebar onClose={toggleSidebarHandler} show={showSidebar}>
      <MenuItemContainer>
        <MenuItem>
          <PrimaryButton width="100%" height="56px">
            Sign in
          </PrimaryButton>
        </MenuItem>
        <MenuItemContainer style={{marginTop: '24px'}}>
          <MenuItem>Create a business account</MenuItem>
          <MenuItem>Add your restaurant</MenuItem>
          <MenuItem>Sign up to deliver</MenuItem>
        </MenuItemContainer>
      </MenuItemContainer>
      <StyledFooter>
        <StyledMobileAppSection>
          <img alt="Mobile app logo" src={logoDark} />
          <p>There's more to love in the app.</p>
        </StyledMobileAppSection>

        <RoundedButton
          style={{width: '130px', height: '40px', minHeight: 'unset', fontSize: '1rem', marginTop: '16px'}}
        >
          <AppleIcon /> Get the app
        </RoundedButton>
      </StyledFooter>
    </Sidebar>
  )
}

export default GlobalSidebar
