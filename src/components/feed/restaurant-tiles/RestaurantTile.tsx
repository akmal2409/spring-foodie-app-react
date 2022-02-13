import styled from 'styled-components'
import {Restaurant} from '../../../model/Restaurant'
import RestaurantClosedImg from '../../../assets/restaurant_closed.png'

const RestaurantTile = ({restaurant}: {restaurant: Restaurant}) => {
  const closedClass = !restaurant.open ? 'closed' : ''

  return (
    <StyledTile>
      <div className={`img-container ${closedClass}`}>
        <StyledTileImage src={restaurant.thumbnailImage.url} />
        {!restaurant.open && (
          <>
            <DarkImageOverlay />
            <ClosedText>
              <img src={RestaurantClosedImg}></img>&nbsp;Currently closed
              <p>{restaurant.openingTime}</p>
            </ClosedText>
          </>
        )}
      </div>
      <StyledTileFooter>
        <div className="title-container">
          <h3>{restaurant.name}</h3>
          <div className="rounded-rating">{restaurant.rating}</div>
        </div>
        <div className="delivery-info">
          <span className="price">&euro;{restaurant.deliveryCost} fee</span>
          &nbsp;&bull;&nbsp;
          <span className="delivery-time">
            {restaurant.averageDeliveryTime}-{restaurant.averageDeliveryTime + 5}&nbsp;min
          </span>
        </div>
      </StyledTileFooter>
    </StyledTile>
  )
}

const StyledTile = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  & .img-container {
    height: 128px;
    position: relative;
  }
`

const ClosedText = styled.p`
  position: absolute;
  top: 50%;
  width: 100%;
  color: #fff;
  text-align: center;
  font-weight: 600;

  p {
    color: #ffff8888;
    text-align: center;
  }

  img {
    display: inline-block;
    width: 10px;
    height: 10px;
  }
`

const DarkImageOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const StyledTileFooter = styled.div`
  padding-top: 8px;
  display: flex;
  flex-direction: column;

  .delivery-info {
    font-size: 0.9rem;

    .price {
      color: var(--theme-text-secondary);
    }

    .delivery-time {
      color: var(--theme-text-grey);
    }
  }

  .title-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .rounded-rating {
    background: var(--theme-background-grey);
    border-radius: 50%;
    font-size: 0.9rem;
    padding: 5px;
    font-weight: 500;
    text-align: center;
    height: 28px;
    width: 28px;
  }

  & h3 {
    font-weight: 500;
    line-height: 24px;
    width: 100%;
  }
`

const StyledTileImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
`

export default RestaurantTile
