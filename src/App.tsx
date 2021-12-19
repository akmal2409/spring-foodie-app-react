import {Route, Routes} from 'react-router-dom'
import GlobalSidebar from './components/global/GlobalSidebar'
import LandingLayout from './components/layout/LandingLayout'
import {GlobalStyle} from './components/ui/GlobalStyles'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<LandingLayout />} />
      </Routes>
      <GlobalSidebar />
    </>
  )
}

export default App
