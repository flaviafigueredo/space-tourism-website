import styled from "styled-components";
import backgroundImageDesktop from '/assets/technology/background-technology-desktop.jpg';
import backgroundImageTablet from '/assets/technology/background-technology-tablet.jpg';
import backgroundImageMobile from '/assets/technology/background-technology-mobile.jpg';

export const TechnologySection = styled.section`
    background-image: url(${backgroundImageDesktop});
    overflow: hidden;
    position: relative;

    @media(max-width: 1024px) {
        background-image: url(${backgroundImageTablet});
    }

    @media(max-width: 430px) {
        background-image: url(${backgroundImageMobile});
    }

    @media(max-width: 280px) {
        overflow: visible;
        height: 580px;
    }
`

export const TechnologyContainer = styled.div`
    flex-direction: column;
    margin-bottom: 70px;

    @media(max-width: 430px) {
        margin-top: 132px;
        position: relative;
        margin-bottom: 0;
        height: 80vh;
    }

    @media(max-width: 414px) {
        margin-top: 98px;
    }

    @media(max-width: 390px) {
        margin-top: 55px;
    }

    @media(max-width: 384px) {
        margin-top: 38px;
    }

    @media(max-width: 280px) {
        margin-top: -120px;
        height: 361px;
    }

    @media(max-width: 240px) {
            margin-top: -46px;
    }
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    height: 304px;
    gap: 80px;
    margin-top: 137px;

    @media (max-width: 1024px) {
        flex-direction: column;
        justify-content: center;
        margin-top: 579px;
    }

    @media(max-width: 540px) {
        margin-top: 310px;
    }

    @media(max-width: 430px) {
        position: absolute;
        bottom: 0;
        top: 230px;
        left: 0;
        right: 0;
        margin: auto;
    }

    @media(max-width: 384px) {
        top: 250px;
        width: 300px;
    }

    @media(max-width: 360px) {
        width: 270px;
        height: 311px;
        top: 270px;
    }

    @media(max-width: 320px) {
        top: 230px;
    }

    @media(max-width: 280px) {
        top: 170px;
        width: 250px;
        height: 265px;
        position: relative;
    }

    @media(max-width: 240px) {
        top: 120px;
        width: 200px;
    }
`

export const TechnologyNavigation = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 32px;

    @media (max-width: 1024px) {
        flex-direction: row;
        gap: 16px;
    }
`

export const TechnologySelector = styled.a`
    display: block;
    width: 80px;
    height: 80px;
    text-align: center;
    line-height: 80px;
    font-size: 32px;
    border-radius: 50px;
    border: 1px solid rgba(151, 151, 151, 0.3);
    color: var(--primary-color);
    background-color: transparent;
    transition: .4s ease-in-out;
    cursor: pointer;

    &:hover {
        border: 1px solid var(--primary-color);
    }

    &.active {
        background-color: var(--primary-color);
        color: var(--button-color);
    }    

    @media (max-width: 1024px) {
        width: 60px;
        height: 60px;
        line-height: 60px;
        font-size: 24px;
    }

    @media(max-width: 430px) {
        font-size: 16px;
        width: 40px;
        height: 40px;
        line-height: 40px;
    }
`

export const TechnologyInfos = styled.div`
    width: 470px;

    @media (max-width: 1024px) {
        width: 470px;
        text-align: center;
        margin-top: -44px;
    }

    @media(max-width: 430px) {
        width: 325px;
        margin-top: -10px;
    }

    @media(max-width: 384px) {
        margin-top: -40px;
    }

    @media(max-width: 360px) {
        width: 270px;
        height: 220px;
        margin-top: -30px;
    }

    @media(max-width: 320px) {
        margin-top: -65px;
    }

    @media(max-width: 280px) {
        width: 250px;
        min-height: 265px;
    }

    @media(max-width: 240px) {
            width: 200px;
    }
`

export const P = styled.p`
    text-transform: uppercase;
    letter-spacing: 2.7px;
    line-height: normal;
    font-size: 16px;

    @media(max-width: 430px) {
        font-size: 14px;
    }
`

export const H3 = styled.h3`
    font-family: var(--main-font-family);
    text-transform: uppercase;
    font-size: 56px;
    margin: 11px 0 31px 0;

    @media (max-width: 1024px) {
        font-size: 40px;
        margin: 16px 0;
    }

    @media(max-width: 430px) {
        font-size: 24px;
        margin: 9px 0 16px;
    }

    @media(max-width: 280px) {
        font-size: 20px;
    }
`

export const IMG = styled.img`
    position: absolute;
    top: 30%;
    right: 0;

    @media (max-width: 1024px) {
        position: absolute;
        top: 22%;
        right: auto;
        width: 105%;
    }

    @media(max-width: 430px) {
        top: 25%;
    }

    @media(max-width: 384px) {
        width: 100%;
    }

    @media(max-width: 280px) {
        top: 21%;
`