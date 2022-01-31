import {Route, Routes} from 'react-router-dom'
import styled from 'styled-components'
import Feed from '../feed/Feed'
import Header from './header/Header'

const MainLayoutContainer = styled.div`
  width: 100%;
  /* height: 100%; */
  padding: 46px;
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  margin: 80px auto 20px auto;
  max-width: 1920px;
`
const Layout = () => {
  return (
    <>
      <Header />
      <MainLayoutContainer>
        <Routes>
          <Route path="/" element={<Feed />} />
          {/* <Route path="/feed/restaurant/:restaurantId" element={<Layout />} /> */}
        </Routes>
      </MainLayoutContainer>
    </>
  )
}

export default Layout
