import styled from "styled-components";
import backgroundImageDesktop from '/assets/home/background-home-desktop.jpg';
import backgroundImageTablet from '/assets/home/background-home-tablet.jpg';
import backgroundImageMobile from '/assets/home/background-home-mobile.jpg';

export const HomeSection = styled.section`
    background-image: url(${backgroundImageDesktop});

    @media(max-width: 1024px) {
        background-image: url(${backgroundImageTablet});
    }

    @media(max-width: 430px) {
        background-image: url(${backgroundImageMobile});
    }
`

export const HomeContainer = styled.div`
    justify-content: space-between;
    align-items: center;
`

export const Content = styled.div`
    width: 450px;

    @media(max-width: 1024px) {
        margin-bottom: 156px;
        text-align: center;
    }

    @media(max-width: 540px) {
        margin-bottom: 10px;
    }

    @media(max-width: 430px) {
        width: 327px;
        margin-bottom: 80px;
    }

    @media(max-width: 320px) {
        width: 300px;
        margin-bottom: 20px;
    }

    @media(max-width: 280px) {
        width: 240px;
        margin-bottom: 20px;
    }

    @media(max-width: 240px) {
        width: 200px;
        margin-bottom: 10px;
    }
`

export const H5 = styled.h5`
    color: var(--secondary-color);
`

export const H1 = styled.h1`
    font-size: 150px;
    margin: 24px 0;

    @media(max-width: 430px) {
        font-size: 80px;
        margin: 16px 0;
    }

    @media(max-width: 280px) {
        font-size: 50px;
    }
`

export const P = styled.p`
    font-size: 20px;
    text-align: justify;

    @media(max-width: 1024px) {
        text-align: center;
    }

    @media(max-width: 430px) {
        font-size: 15px;
    }
`

export const Button = styled.button`
    width: 274px;
    height: 274px;
    border-radius: 50%;
    border: none;
    font-family: var(--main-font-family);
    text-transform: uppercase;
    font-size: 32px;
    color: var(--button-color);
    background-color: var(--primary-color);
    letter-spacing: 2px;
    cursor: pointer;
    transition: .7s ease-in-out;

    &:hover {
        box-shadow: 0 0 0 50px rgba(151, 151, 151, 0.2);
    }

    @media(max-width: 1024px) {
        width: 242px;
        height: 242px;
    }

    @media(max-width: 280px) {
        width: 100px;
        height: 100px;
        font-size: 16px;
        margin-bottom: 20px;
    }
`