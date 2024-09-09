import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import '../assets/font/Pretendard/Pretendard.css';
import '../assets/font/notoSans/notoSans.css';

interface GlobalStylesProps {
  isDarkMode: boolean;
}

export const GlobalStyles = createGlobalStyle<GlobalStylesProps>`
  ${reset}

  :root {
    ${({ isDarkMode }) =>
      isDarkMode
        ? `
      --background-ui-color: #3b414f;
      --background-color: #303644;
      --text-color: #FFFFFF;
      --prime-color:#292d3a; 
      --blur-button-color:#363c49;  
      --blur-button-text-color:#848C98;
      --flightTime-color: #363c49;  
    `
        : `
      --background-ui-color: #FFFFFF;
      --background-color: #F3F4F6;
      --text-color: #303644;
      --prime-color:#3182F7;
      --blur-button-color:#B0B9C2; 
      --blur-button-text-color:#FFFFFF;   
      --flightTime-color: #ededed; 
      `}

    // 컬러
    --button-color:#F9FAFC;
    --header-icon-color:#B0B9C2;
     
    --light-text-color: #848C98;
    --button-text-color: #545869;

    --widget-color: #fb3eec;
    --feature-color: #4aa838;
    --entity-color: #5181e9;

    // 단위
    --spacing-small: 0.7rem;
    --spacing-medium: 1rem;
    --spacing-large: 1.5rem;

    --background-radius: 1rem;

    --mobile: 480px;
    --tablet: 768px;
    --desktop: 1024px;
    --large-desktop: 1440px;
  }

  
  /* ( 크롬, 사파리, 오페라, 엣지 ) 동작 */
  .scroll::-webkit-scrollbar {
    display: none;
  }

  .scroll {
    -ms-overflow-style: none; /* 인터넷 익스플로러 */
    scrollbar-width: none; /* 파이어폭스 */
  }

  body {
    font-family: 'Pretendard-Regular';
    font-weight: 400;
    color: var(--text-color);
    -webkit-user-select: none; /* Chrome, Safari */
    -moz-user-select: none;    /* Firefox */
    -ms-user-select: none;     /* Internet Explorer/Edge */
    user-select: none;         /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
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
