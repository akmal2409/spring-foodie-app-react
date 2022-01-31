import styled from 'styled-components'
import {useGetCategoriesQuery} from '../../services/api.slice'
import CategoriesInline from './categories-inline/CategoriesInline'
import {CategoriesContainer} from './CategoriesContainer'
import {FeedContainer} from './FeedContainer'
import SidebarFilters from './SidebarFilters'

const OfferSection = styled.main`
  width: 75%;
  height: 100%;
  padding: 20px;
`

const Feed = () => {
  const {data: categories} = useGetCategoriesQuery()

  return (
    <>
      <CategoriesContainer>{categories && <CategoriesInline categories={categories} />}</CategoriesContainer>
      <FeedContainer>
        <div style={{width: '25%', display: 'block', overflow: 'visible'}}>
          <SidebarFilters />
        </div>
        <OfferSection></OfferSection>
      </FeedContainer>
    </>
  )
}

export default Feed
