import styled from "styled-components";
import backgroundImageDesktop from '/assets/crew/background-crew-desktop.jpg';
import backgroundImageTablet from '/assets/crew/background-crew-tablet.jpg';
import backgroundImageMobile from '/assets/crew/background-crew-mobile.jpg';

export const CrewSection = styled.section`
    background-image: url(${backgroundImageDesktop});
    position: relative;

    @media(max-width: 1024px) {
        background-image: url(${backgroundImageTablet});
    }

    @media(max-width: 430px) {
        background-image: url(${backgroundImageMobile});
        align-items: normal;
    }
`

export const CrewContainer = styled.div`
    flex-direction: column;

    @media(max-width: 430px) {
        position: relative;
        height: 195px;
    }

    @media(max-width: 414px) {
        margin-top: 140px;
    }

    @media(max-width: 390px) {
        margin-top: 114px;
    }

    @media(max-width: 280px) {
        margin-top: 88px;
        height: 420px;
    }

    @media(max-width: 240px) {
        margin-top: 50px;
    }
`

export const Content = styled.div`
    align-self: flex-start;
    max-width: 615px;
    height: 360px;
    margin-top: 154px;

    @media (max-width: 1024px) {
        align-self: center;
        text-align: center;
        margin-top: 110px;
        height: 844px;
    }

    @media(max-width: 540px) {
        margin-top: 40px;
        height: 744px;
    }

    @media(max-width: 430px) {
        max-width: 327px;
        height: 175px;
        position: absolute;
        bottom: -55vh;
    }

    @media(max-width: 384px) {
        height: 150px;
        bottom: -50vh;
    }

    @media(max-width: 320px) {
        max-width: 300px;
        top: 170px;
        height: 150px;
    }

    @media(max-width: 280px) {
        max-width: 250px;
        top: 35px;
    }

    @media(max-width: 240px) {
        max-width: 200px;
        top: 0px;
        bottom: -20vh;
    }
`

export const H4 = styled.h4`
    font-family: var(--main-font-family);
    font-size: 32px;
    text-transform: uppercase;
    color: var(--accent-color);

    @media (max-width: 1024px) {
        font-size: 24px;  
    }

    @media(max-width: 430px) {
        font-size: 16px;
    }
`

export const H3 = styled.h3`
    font-family: var(--main-font-family);
    font-size: 56px;
    text-transform: uppercase;
    margin: 15px 0 40px 0;

    @media (max-width: 1024px) {
        font-size: 40px;
        margin: 8px 0 16px 0;
    }

    @media(max-width: 430px) {
        font-size: 24px;
    }

    @media(max-width: 384px) {
        font-size: 20px;
        margin: 8px 0;
    }
`

export const P = styled.p`
    max-width: 444px;

    @media (max-width: 1024px) {
        width: 592px;
        height: 105px;
    }

    @media(max-width: 430px) {
        max-width: 327px;
    }

    @media(max-width: 384px) {
        height: 93px;
    }

    @media(max-width: 320px) {
        max-width: 300px;
    }

    @media(max-width: 280px) {
        max-width: 250px;
    }

    @media(max-width: 240px) {
        max-width: 200px;
    }
`

export const CrewNavigation = styled.ul`
    display: flex;
    gap: 24px;
    position: absolute;
    bottom: 94px;

    @media (max-width: 1280px) {
        bottom: 60px;
    }

    @media (max-width: 1024px) {
        justify-content: center;
        position: initial;
        margin-top: 40px;
    }

    @media(max-width: 430px) {
        position: absolute;
        top: -35px;
        bottom: 0;
        right: 0;
        left: 0;
        margin: 0 auto 32px;
        height: fit-content;
    }

    @media(max-width: 280px) {
        top: -35px;
    }
`

export const CrewMemberSelector = styled.a`
    display: block;
    width: 15px;
    height: 15px;
    background-color: rgba(151, 151, 151, 0.3);
    border-radius: 50%;
    cursor: pointer;
    transition: .4s ease-in-out;
    cursor: pointer;

    &.active {
        background-color: var(--primary-color);
    }

    &:hover {
        background-color: var(--hover-color);
    }

    @media (max-width: 1024px) {
        width: 10px;
        height: 10px;
    }
`

export const IMG = styled.img`
    position: absolute;
    right: 137px;
    bottom: 0;

    @media (max-width: 1280px) {
        height: 60%;
    }

    @media (max-width: 1024px) {
        max-width: 539px;
        max-height: 532px;
        right: auto;
    }

    @media(max-width: 540px) {
        max-width: 439px;
        max-height: 432px;
    }

    @media(max-width: 430px) {
        top: 90px;
        object-fit: cover;
        max-width: 90vw;
        max-height: 45vh;
        min-height: 45vh;
        padding: 50px 10px 0;
        border-bottom: 1px solid var(--accent-color);
    }

    @media(max-width: 414px) {
        top: 120px;
    }

    @media(max-width: 390px) {
        top: 120px;
    }

    @media(max-width: 320px) {
        top: 85px;
        max-height: 40vh;
        min-height: 40vh;
    }

    @media(max-width: 280px) {
        top: 80px;
    }

    @media(max-width: 240px) {
        top: 65px;
        object-fit: unset;
        max-height: 50vh;
        min-height: 50vh;
    }
`