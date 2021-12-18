import {useDispatch, useSelector} from 'react-redux'
import {Route, Routes} from 'react-router-dom'
import LandingLayout from './components/layout/LandingLayout'
import {GlobalStyle} from './components/ui/GlobalStyles'
import Sidebar from './components/ui/sidebar/Sidebar'
import {toggleSidebar} from './store/slices/ui.slice'
import {RootState} from './store/store'

const App = () => {
  const showSidebar = useSelector((state: RootState) => state.ui.showSidebar)
  const dispatch = useDispatch()

  const toggleSidebarHandler = () => {
    dispatch(toggleSidebar())
  }

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<LandingLayout />} />
      </Routes>
      <Sidebar onClose={toggleSidebarHandler} show={showSidebar} />
    </>
  )
}

export default App
