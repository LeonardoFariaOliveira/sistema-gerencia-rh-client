import styled from "styled-components";

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
    transform: translate(${({ showModal }) => showModal ? '-50% , 0' : '-50% , -200%'});
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

export const OptionsWrapper = styled.div`
    padding-top: 32px;
    padding-bottom: 32px;
    padding-left: 48px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 564px;
`;

export const ShortInputsDiv = styled.div`

    display: flex;
    width: 100%;
    box-sizing: border-box;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

`;

export const Spacement = styled.div`

    height: 56px;

`;