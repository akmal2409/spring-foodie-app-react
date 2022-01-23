import {useGetCategoriesQuery} from '../../services/api.slice'
import CategoriesInline from './categories-inline/CategoriesInline'

const Feed = () => {
  const {data: categories} = useGetCategoriesQuery()

  return <>{categories && <CategoriesInline categories={categories} />}</>
}

export default Feed
