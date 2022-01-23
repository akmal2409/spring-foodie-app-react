import {Route, Routes} from 'react-router-dom'
import Feed from './components/feed/Feed'
import GlobalSidebar from './components/global/GlobalSidebar'
import Container from './components/layout/Container'
import LandingLayout from './components/layout/LandingLayout'
import Layout from './components/layout/Layout'
import {GlobalStyle} from './components/ui/GlobalStyles'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Container id="wrapper" style={{padding: '46px'}}>
        <Routes>
          <Route path="/" element={<LandingLayout />} />
          <Route path="/feed/*" element={<Layout />} />
        </Routes>
      </Container>
      <GlobalSidebar />
    </>
  )
}

export default App
