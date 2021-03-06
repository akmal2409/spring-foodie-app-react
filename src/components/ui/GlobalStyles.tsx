import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
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

  /* Margin */
  .m-1 {
    margin: 1px;
  }

  .m-2 {
    margin: 2px;
  }

  .m-3 {
    margin: 3px;
  }

  .m-4 {
    margin: 4px;
  }

  .m-5 {
    margin: 5px;
  }

  .mt-1 {
    margin-top: 1px;
  }

  .mt-2 {
    margin-top: 2px;
  }

  .mt-3 {
    margin-top: 3px;
  }

  .mt-4 {
    margin-top: 4px;
  }

  .mt-5 {
    margin-top: 5px;
  }

  .mb-1 {
    margin-bottom: 1px;
  }

  .mb-2 {
    margin-bottom: 2px;
  }

  .mb-3 {
    margin-bottom: 3px;
  }

  .mb-4 {
    margin-bottom: 4px;
  }

  .mb-5 {
    margin-bottom: 5px;
  }

  .mr-1 {
    margin-right: 1px;
  }

  .mr-2 {
    margin-right: 2px;
  }

  .mr-3 {
    margin-right: 3px;
  }

  .mr-4 {
    margin-right: 4px;
  }

  .mr-5 {
    margin-right: 5px;
  }

  .ml-1 {
    margin-left: 1px;
  }

  .ml-2 {
    margin-left: 2px;
  }

  .ml-3 {
    margin-left: 3px;
  }

  .ml-4 {
    margin-left: 4px;
  }

  .ml-5 {
    margin-left: 5px;
  }

  /* Padding */
  .p-1 {
    padding: 1px;
  }

  .p-2 {
    padding: 2px;
  }

  .p-3 {
    padding: 3px;
  }

  .p-4 {
    padding: 4px;
  }

  .p-5 {
    padding: 5px;
  }

  .pt-1 {
    padding-top: 1px;
  }

  .pt-2 {
    padding-top: 2px;
  }

  .pt-3 {
    padding-top: 3px;
  }

  .pt-4 {
    padding-top: 4px;
  }

  .pt-5 {
    padding-top: 5px;
  }

  .pb-1 {
    padding-bottom: 1px;
  }

  .pb-2 {
    padding-bottom: 2px;
  }

  .pb-3 {
    padding-bottom: 3px;
  }

  .pb-4 {
    padding-bottom: 4px;
  }

  .pb-5 {
    padding-bottom: 5px;
  }

  .pr-1 {
    padding-right: 1px;
  }

  .pr-2 {
    padding-right: 2px;
  }

  .pr-3 {
    padding-right: 3px;
  }

  .pr-4 {
    padding-right: 4px;
  }

  .pr-5 {
    padding-right: 5px;
  }

  .pl-1 {
    padding-left: 1px;
  }

  .pl-2 {
    padding-left: 2px;
  }

  .pl-3 {
    padding-left: 3px;
  }

  .pl-4 {
    padding-left: 4px;
  }

  .pl-5 {
    padding-left: 5px;
  }
`;