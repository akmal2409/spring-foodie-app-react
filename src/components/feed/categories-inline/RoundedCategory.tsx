import {NavLink} from 'react-router-dom'
import styled from 'styled-components'

const StyledRoundedCategory = styled.li`
  display: block;
  cursor: pointer;
  max-width: fit-content;

  & .link {
    max-width: fit-content;
    text-decoration: none;
    min-width: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
  }

  & .label {
    white-space: break-spaces;
    text-align: center;
    width: 100%;
    line-height: 16px;
    font-weight: 400;
    overflow: hidden;
  }

  & .vertical-spacer {
    height: 8px;
  }
`

const IconContainer = styled.div`
  width: 60px;
  height: 60px;
`
const RoundedCategoryIcon = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
`

const RoundedCategory = ({name, imageUrl, onClick}: Props) => {
  return (
    <StyledRoundedCategory>
      <NavLink to="/feed/category/" className="link">
        <IconContainer>
          <RoundedCategoryIcon src={imageUrl} />
        </IconContainer>
        <div className="vertical-spacer"></div>
        <div className="label">{name}</div>
      </NavLink>
    </StyledRoundedCategory>
  )
}

interface Props {
  name: string
  imageUrl: string
  onClick?: () => void
}

export default RoundedCategory
