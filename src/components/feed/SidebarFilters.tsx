import {useEffect, useRef, useState} from 'react'
import styled from 'styled-components'
import RoundedButton from '../ui/RoundedButton'

const SidebarFiltersContainer = styled.section`
  width: 100%;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  display: block;
  flex-direction: column;
  background-color: red;
  max-height: 100vh;
  overflow-y: hidden;

  &.scrolled {
    overflow-y: auto;
  }
`

const SidebarFilters = () => {
  const containerRef = useRef<HTMLElement>(null)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const scrollHandler = (event: any) => {
      if (containerRef?.current && containerRef.current.getBoundingClientRect().y === 0) {
        console.log(containerRef.current.getBoundingClientRect().y)
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('load', scrollHandler)
    window.addEventListener('scroll', scrollHandler)
    window.addEventListener('resize', scrollHandler)
    return () => {
      window.removeEventListener('load', scrollHandler)
      window.removeEventListener('scroll', scrollHandler)
      window.removeEventListener('resize', scrollHandler)
    }
  }, [])

  return (
    <SidebarFiltersContainer ref={containerRef} className={`${isScrolled && 'scrolled'}`}></SidebarFiltersContainer>
  )
}

export default SidebarFilters
