import {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import styled from 'styled-components'
import {PlaceSearchAddress} from '../../model/PlaceSearchResults'
import {useGetCategoriesQuery, useGetRestaurantsQuery} from '../../services/api.slice'
import {RootState} from '../../store/store'
import CategoriesInline from './categories-inline/CategoriesInline'
import {CategoriesContainer} from './CategoriesContainer'
import {FeedContainer} from './FeedContainer'
import RestaurantTiles from './restaurant-tiles/RestaurantTiles'
import SidebarFilters from './SidebarFilters'

const OfferSection = styled.main`
  width: 75%;
  height: 100%;
  padding: 20px;
`

const Feed = () => {
  const [size, setSize] = useState(13)
  const [page, setPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [totalElements, setTotalElements] = useState(0)

  const {data: categories} = useGetCategoriesQuery()
  const address = useSelector((state: RootState) => state.ui.deliveryAddress.address as PlaceSearchAddress)
  const {data: restaurantsPage} = useGetRestaurantsQuery({
    page,
    size,
    country: address.countryCode,
    city: address.localName
  })

  useEffect(() => {
    if (restaurantsPage) {
      setTotalPages(restaurantsPage.totalPages)
      setTotalElements(restaurantsPage.totalElements)
    }
  }, [restaurantsPage])

  return (
    <>
      <CategoriesContainer>{categories && <CategoriesInline categories={categories} />}</CategoriesContainer>
      <FeedContainer>
        <div style={{width: '25%', display: 'block', overflow: 'visible'}}>
          <SidebarFilters />
        </div>

        <OfferSection>
          <RestaurantTiles restraurants={restaurantsPage.content} />
        </OfferSection>
      </FeedContainer>
    </>
  )
}

export default Feed
