import { Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import LandingLayout from './components/layout/LandingLayout';

const App = () => {
  const GlobalStyle = createGlobalStyle`
    * {
      font-family: var(--theme-font-family);
      color: var(--theme-text-primary);
    }

    html {
      font-size: var(--theme-font-size);  
    }

    body {
      background: var(--theme-background-primary);
    }
  `;
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
