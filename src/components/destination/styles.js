import styled from "styled-components";
import backgroundImageDesktop from '/assets/destination/background-destination-desktop.jpg';
import backgroundImageTablet from '/assets/destination/background-destination-tablet.jpg';
import backgroundImageMobile from '/assets/destination/background-destination-mobile.jpg';

export const DestinationSection = styled.section`
    background-image: url(${backgroundImageDesktop});

    @media(max-width: 1024px) {
        background-image: url(${backgroundImageTablet});
    }

    @media(max-width: 430px) {
        background-image: url(${backgroundImageMobile});
    }
`

export const DestinationContainer = styled.div`
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 100%;
    margin-top: 22px;

    @media(max-width: 1024px) {
        margin-top: 60px;
        flex-direction: column;
        text-align: center;
    }

    @media(max-width: 430px) {  
        margin-top: 32px;
    }        
`

export const IMG = styled.img`
    @media(max-width: 540px) {    
        width: 345px;
        height: 345px;
    }

    @media(max-width: 430px) {
        width: 170px;
        height: 170px;
    }
`

export const DestinationInfos = styled.div`
    max-width: 444px;
    height: 485px;

    @media(max-width: 430px) {
        max-width: 327px;
    }

    @media(max-width: 320px) {    
        max-width: 300px;
        margin-bottom: 20px;    
    }

    @media(max-width: 280px) {
        max-width: 220px;
        padding-bottom: 10px;
    }

    @media(max-width: 240px) {
        max-width: 200px;        
    }
`

export const MenuDestinations = styled.ul` 
    display: flex;
    align-items: center;
    gap: 35px;
    margin-bottom: 37px;

    @media(max-width: 1024px) {
        justify-content: center;
        margin-top: 53px;
        margin-bottom: 32px;
    }

    @media(max-width: 430px) {
        gap: 26px;
    }   
    
    @media(max-width: 280px) {
        gap: 15px;
    }
`

export const DestinationOption = styled.a`
    font-family: var(--secondary-font-family);
    color: var(--secondary-color);
    text-transform: uppercase;
    letter-spacing: 2.7px;
    padding: 0 0 12px 0;
    border-bottom: 3px solid transparent;
    transition: .5s ease-in-out;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid var(--primary-color);
        color: var(--primary-color);
    }

    &:hover {
        border-bottom: 3px solid var(--hover-color);
    }

    @media(max-width: 430px) {
        font-size: 14px;
    }    
`

export const H1 = styled.h1`
    font-size: 100px;
    margin-bottom: 40px;

    @media(max-width: 1024px) {
        font-size: 80px;
        margin-bottom: 30px;
    }

    @media(max-width: 430px) {
        font-size: 56px;
        margin: 20px 0 1px 0;
    }
`

export const P = styled.p`
    padding-bottom: 54px;
    margin-bottom: 28px;
    border-bottom: 1px solid var(--accent-color);

    @media(max-width: 1024px) {
        padding-bottom: 39px;
    }

    @media(max-width: 430px) {
        padding-bottom: 32px;
    }
`

export const TravelDetails = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media(max-width: 1024px) {
        justify-content: space-around;
    }
    
    @media(max-width: 430px) {
        flex-direction: column;
        gap: 32px;
    }

    @media(max-width: 280px) {
        gap: 15px;
    }
`

export const H6 = styled.h6`
    font-family: var(--secondary-font-family);
    font-size: 14px;
    letter-spacing: 2.36px;
    color: var(--secondary-color);
    text-transform: uppercase;
    margin-bottom: 12px;
`

export const H5 = styled.h5`
    font-family: var(--main-font-family);
    font-size: 28px;
    text-transform: uppercase;

    @media(max-width: 280px) {
        font-size: 18px;
    }
`