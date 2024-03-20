import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    :root {
        --main-font-family: 'Bellefair', serif;
        --secondary-font-family: 'Barlow Condensed', sans-serif;
        --primary-color: #ffffff;
        --secondary-color: #D0D6F9;
        --accent-color: #979797;
        --button-color: #0B0D17;  
        --hover-color: #979797;
        --section-title-span-color: rgba(151, 151, 151, 0.5);
    }
      
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-weight: 400;
    }
      
    ul {
        list-style: none;
    }
      
    a {
        text-decoration: none;
    }

    section {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        color: var(--primary-color);
    }
      
    .container {
        min-width: 1138px;
        display: flex;
        margin-top: 212px;
    }

    .sub-heading {
        font-family: var(--secondary-font-family);
        font-size: 28px;
        letter-spacing: 4.75px;
        text-transform: uppercase;
        align-self: flex-start;
    }
      
    .sub-heading span {
        color: var(--section-title-span-color);
    }
      
    h1 {
        font-family: var(--main-font-family);
        text-transform: uppercase;
    }
      
    p {
        font-family: var(--secondary-font-family);
        color: var(--secondary-color);
        line-height: 32px;
        font-size: 18px;
    }
      
    @media (max-width: 1024px) {
        .container {
          min-width: 80%;
          margin-top: 106px;
          flex-direction: column;
        }
      
        .sub-heading {
          font-size: 20px;
          letter-spacing: 3.38px;
          align-self: flex-start;
        }
      
        p {
          line-height: 28px;
          font-size: 16px;
          text-align: center;
        }
    }
      
    @media(max-width: 430px) {
        .container {
          margin-top: 88px;
        }
      
        .sub-heading {
          font-size: 16px;
          letter-spacing: 2.7px;
          align-self: center;
        }
      
        p {
          font-size: 15px;
          line-height: 25px;
        }
    }
`