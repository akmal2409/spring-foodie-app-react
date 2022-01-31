import {useEffect, useState} from 'react'
import {Navigate, useNavigate} from 'react-router-dom'
import styled from 'styled-components'
import useDebounce from '../../hooks/useDebounce'
import LandingHero from '../landing/LandingHero'
import SearchSection from '../landing/SearchContainer'
import LandingHeader from './header/LandingHeader'

const StyledMain = styled.div`
  display: block;

  & .main-container {
    position: relative;
  }
`

export const HeaderWrapper = styled.div`
  width: 100%;
  z-index: 10;
  position: fixed;
`

const LandingLayout = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobile, setMobile] = useState(false)
  const debounce = useDebounce()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = (event: Event) => {
      setScrolled(window.scrollY > 0)
    }

    const onResize = (event: Event) => {
      debounce(() => {
        setMobile(window.innerWidth < 768)
      }, 2000)
    }

    window.addEventListener('scroll', onScroll)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  if (localStorage.getItem('deliveryAddress') != null) {
    return <Navigate to={`/feed`} replace />
  }

  return (
    <>
      <HeaderWrapper>
        <LandingHeader scrolled={scrolled} />
      </HeaderWrapper>
      <StyledMain>
        <LandingHero />
        <SearchSection />
      </StyledMain>
    </>
  )
}

export default LandingLayout
