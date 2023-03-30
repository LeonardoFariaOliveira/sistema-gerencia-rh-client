import styled from "styled-components";

export const Container = styled.header`

    position: fixed;
    top: 0;
    right: 0;
    width: calc(100% - 80px);
    height: 96px;
    background-color: ${({ theme }) => theme.colors.primary};
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 32px;
    -webkit-box-shadow: 0px 0px 15px 2px rgba(0,0,0,0.40);
    -moz-box-shadow: 0px 0px 15px 2px rgba(0,0,0,0.40);
    box-shadow: 0px 0px 15px 2px rgba(0,0,0,0.40);

    div { 
        display: flex;
        align-items: center;
        justify-content: center;
     }

`;

export const Name = styled.p`

    font-size: 32px;
    color: ${({ theme }) => theme.text.primary};

`;

export const Logged = styled.p`

    font-size: 16px;
    ${({ theme }) => theme.text.primary};
    margin: 0 32px;

`;