import { createGlobalStyle } from 'styled-components';
import rootStyles from './global-styles/root-styles';

const App = () => {
  const GlobalStyle = createGlobalStyle`
    ${rootStyles}

    * {
      font-family: var(--theme-font-family);
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
    </>
  );
}

export default App;
