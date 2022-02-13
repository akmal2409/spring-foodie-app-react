import {Restaurant} from '../../../model/Restaurant'
import RestaurantTile from './RestaurantTile'
import RestaurantTilesGrid from './RestaurantTilesGrid'

const RestaurantTiles = (props: Props) => {
  return (
    <RestaurantTilesGrid>
      {props.restraurants.map(restaurant => (
        <RestaurantTile restaurant={restaurant} key={restaurant.id} />
      ))}
    </RestaurantTilesGrid>
  )
}

interface Props {
  restraurants: Array<Restaurant>
}

export default RestaurantTiles
