import { Route, Routes } from 'react-router-dom';
import LandingLayout from './components/layout/LandingLayout';
import { GlobalStyle } from './components/ui/GlobalStyles';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<LandingLayout />} />
      </Routes>
    </>
  );
}

export default App;
