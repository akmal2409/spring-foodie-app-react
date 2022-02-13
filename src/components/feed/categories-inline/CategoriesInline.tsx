import styled from 'styled-components'
import {Category} from '../../../model/Category'
import RoundedCategory from './RoundedCategory'

const InlineCategoryContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  gap: 10px;
  padding: 0;
  margin: 0;
  overflow-x: auto;
`

const CategoriesInline = ({categories}: {categories: Category[]}) => {
  return (
    <InlineCategoryContainer>
      {categories.map(category => (
        <RoundedCategory key={category.id} name={category.name} imageUrl={category?.icon?.url} />
      ))}
    </InlineCategoryContainer>
  )
}

export default CategoriesInline
