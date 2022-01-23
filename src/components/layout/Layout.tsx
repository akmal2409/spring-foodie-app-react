import {Route, Routes} from 'react-router-dom'
import Feed from '../feed/Feed'
import Container from './Container'
import Header from './header/Header'

const Layout = () => {
  return (
    <>
      <Header />
      <Container style={{marginTop: '60px'}}>
        <Routes>
          <Route path="/" element={<Feed />} />
          {/* <Route path="/feed/restaurant/:restaurantId" element={<Layout />} /> */}
        </Routes>
      </Container>
    </>
  )
}

export default Layout
