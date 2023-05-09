import styled from "styled-components";

export const Container = styled.button`

    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: Nunito;
    padding: 0 24px;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
    font-size: 24px;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.tertiary};
    width: 480px;
    height: 64px;
    border-radius: 5px;
    border-style: none;

`;

export const Icon = styled.div`

    font-size: 32px;
    margin-bottom: -15px;
    margin-right: -10px;
    color: ${({ theme }) => theme.colors.primary};

`;