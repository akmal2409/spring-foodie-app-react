import {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import styled from 'styled-components'
import {PlaceSearchAddress} from '../../model/PlaceSearchResults'
import {Restaurant} from '../../model/Restaurant'
import {useGetCategoriesQuery, useGetRestaurantsQuery} from '../../services/api.slice'
import {RootState} from '../../store/store'
import {PrimaryButton, SolidButton} from '../ui/buttons/SolidButton'
import CategoriesInline from './categories-inline/CategoriesInline'
import {CategoriesContainer} from './CategoriesContainer'
import {FeedContainer} from './FeedContainer'
import RestaurantTiles from './restaurant-tiles/RestaurantTiles'
import SidebarFilters from './sidebar-filters/SidebarFilters'

const OfferSection = styled.main`
  width: 75%;
  height: 100%;
  padding-top: 20px;
`

const Feed = () => {
  const [size, setSize] = useState(15)
  const [page, setPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [totalElements, setTotalElements] = useState(0)
  const [restaurants, setRestaurants] = useState<Array<Restaurant>>([])

  const {data: categories} = useGetCategoriesQuery()
  const address = useSelector((state: RootState) => state.ui.deliveryAddress.address as PlaceSearchAddress)
  const {
    data: restaurantsPage,
    isLoading,
    error
  } = useGetRestaurantsQuery({
    page,
    size,
    country: address.countryCode,
    city: address.localName
  })

  const onShowMore = () => {
    setPage(prev => prev + 1)
  }

  const contentReady = !isLoading && !error && restaurantsPage != null

  useEffect(() => {
    if (restaurantsPage) {
      setTotalPages(restaurantsPage.totalPages)
      setTotalElements(restaurantsPage.totalElements)
      setRestaurants(prev => [...prev, ...restaurantsPage?.content])
    }
  }, [restaurantsPage])

  return (
    <>
      <CategoriesContainer>{categories && <CategoriesInline categories={categories} />}</CategoriesContainer>
      <FeedContainer>
        <div style={{width: '25%', display: 'block', overflow: 'visible', paddingRight: '5px'}}>
          <SidebarFilters />
        </div>

        {contentReady && (
          <OfferSection>
            <RestaurantTiles restraurants={restaurants} />
            {page < totalPages && (
              <div style={{marginTop: '20px'}}>
                <PrimaryButton onClick={onShowMore} style={{margin: '0 auto'}}>
                  Show More
                </PrimaryButton>
              </div>
            )}
          </OfferSection>
        )}
      </FeedContainer>
    </>
  )
}

export default Feed
