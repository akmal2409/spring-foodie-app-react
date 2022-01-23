import {Route, Routes} from 'react-router-dom'
import Feed from '../feed/Feed'
import Container from './Container'
import Header from './header/Header'

const Layout = () => {
  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route path="/feed" element={<Feed />} />
          {/* <Route path="/feed/restaurant/:restaurantId" element={<Layout />} /> */}
        </Routes>
      </Container>
    </>
  )
}

export default Layout
