import React from 'react';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import '../assets/font/Pretendard/Pretendard.css';
import '../assets/font/notoSans/notoSans.css';
export const GlobalStyles = createGlobalStyle`
  ${reset}

  :root {
    --text-color: #303644;
    --light-text-color: #848C98;
    --widget-color: #fb3eec;
    --feature-color: #4aa838;
    --entity-color: #5181e9;

    --spacing-small: 0.7rem;
    --spacing-medium: 0.1rem;
    --spacing-large: 1rem;

    --background-radius: 1rem;

    --mobile: 480px;
    --tablet: 768px;
    --desktop: 1024px;
    --large-desktop: 1440px;
  }


  body {
    font-family: 'Pretendard-Regular';
    font-weight: 400;
    color: var(--text-color)
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  
  input { 
    -moz-user-select: auto;
    -webkit-user-select: auto;
    -ms-user-select: auto;
    user-select: auto;

    &:focus {
        outline: none;
    }
  }

  button {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
  }
`;
