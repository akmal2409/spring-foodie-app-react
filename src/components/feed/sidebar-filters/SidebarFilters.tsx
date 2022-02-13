import {useEffect, useRef, useState} from 'react'
import styled from 'styled-components'
import Option from '../../ui/controls/option.model'
import Radio from '../../ui/controls/RadioButton'
import RadioGroup from '../../ui/controls/RadioGroup'
import MenuCollapse from '../../ui/menus/menu-collapse/MenuCollapse'

const SidebarFiltersContainer = styled.section`
  width: 100%;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  display: block;
  flex-direction: column;
  max-height: 100vh;
  overflow-y: hidden;
  max-width: 240px;

  &.scrolled {
    overflow-y: auto;
  }
`

const SidebarFilters = () => {
  const containerRef = useRef<HTMLElement>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [sortOptions] = useState<Array<Option>>([
    {label: 'Picked for you', value: 'all', defaultSelection: true},
    {label: 'Most popular', value: 'rating:desc'},
    {label: 'Delivery Time', value: 'deliveryTime:asc'},
    {label: 'Delivery Cost', value: 'deliveryCost:asc'}
  ])
  const [selectedSort, setSelectedSort] = useState('all')

  useEffect(() => {
    const scrollHandler = (event: any) => {
      if (containerRef?.current && containerRef.current.getBoundingClientRect().y === 0) {
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
    <SidebarFiltersContainer ref={containerRef} className={`${isScrolled && 'scrolled'}`}>
      <h1 style={{fontSize: '28px'}}>All stores</h1>
      <MenuCollapse header="Sort">
        <RadioGroup
          layout="vertical"
          onChange={(value: string) => setSelectedSort(value)}
          value={selectedSort}
          options={sortOptions}
        />
      </MenuCollapse>
    </SidebarFiltersContainer>
  )
}

export default SidebarFilters
