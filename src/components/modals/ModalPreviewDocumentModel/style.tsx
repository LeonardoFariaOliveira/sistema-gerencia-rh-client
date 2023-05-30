import styled from "styled-components";
import ButtonPrimary from "../../buttons/ButtonPrimary";

export const Container = styled.div<any>`

    background-color: ${({ theme }) => theme.colors.primary};
    -webkit-box-shadow: 0px 0px 15px 2px rgba(0,0,0,0.40);
    -moz-box-shadow: 0px 0px 15px 2px rgba(0,0,0,0.40);
    box-shadow: 0px 0px 15px 2px rgba(0,0,0,0.40);
    width: 950px;
    box-sizing: border-box;
    position: absolute;
    left: 50%;
    top: 20%;
    transform: translate(${({ showModal }) => showModal ? '-50% , -30%' : '-50% , -200vh'});
    transition: all ease .8s;
    z-index: 99998;

`;

export const Header = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 48px;
    width: 100%;
    height: 92px;
    border-bottom: solid 1px ${({ theme }) => theme.text.secondary};
    color: ${({ theme }) => theme.text.secondary};
    font-size: 32px;
    font-weight: 700;
    box-sizing: border-box;

`;

export const CloseBtn = styled.div`

    color: ${({ theme }) => theme.text.secondary};
    font-size: 32px;
    font-weight: 800;
    cursor: pointer;

`;

export const PreviewScreen = styled.div`

    box-sizing: border-box;
    width: 100%;
    height: 590px;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;

`;

export const InfosWrapper = styled.div`

    width: 350px;
    height: 500px;
    background-color: white;
    padding: 40px 35px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;

`;

export const Title = styled.div`


    font-family: Arial, sans-serif;
    font-weight: bold;
    font-size: 8px;
    text-transform:uppercase;
    margin-bottom: 10px;

`;

export const Paragraph = styled.div<any>`

    width: 100%;
    font-family: Arial, sans-serif;
    font-size: 8px;
    text-align: ${({ align }) => align};
    margin-bottom: 5px;

`;

export const TextCenter = styled.div`

    width: 100%;
    font-family: Arial, sans-serif;
    font-size: 8px;
    text-align: center;
    margin-bottom: 5px;

`;

export const TextFooter = styled.div`

    width: 100%;
    margin-top: 10px;
    font-size: 2px !important;

`;

export const Info = styled.div`

    font-size: 1rem;
    color: ${({ theme }) => theme.colors.tertiary};
    border: solid 1px ${({ theme }) => theme.colors.tertiary};
    font-weight: bold;
    width: 100%;
    box-sizing: border-box;
    padding: 16px 0px;
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    justify-content: center;

`;

export const Footer = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 48px;
    width: 100%;
    height: 92px;
    border-bottom: solid 1px ${({ theme }) => theme.text.secondary};
    color: ${({ theme }) => theme.text.secondary};
    font-size: 32px;
    font-weight: 700;
    box-sizing: border-box;

`;

export const ButtonConfirm = styled(ButtonPrimary)`

    width: 224px;
    margin: 0;

`;

export const ButtonBack = styled(ButtonPrimary)`

    width: 224px;
    background-color: ${({ theme }) => theme.text.secondary};
    margin: 0;

`;