import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 900;
    font-size: 24px;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.tertiary};
    width: 480px;
    height: 64px;
    border-radius: 5px;

`;

export const Icon = styled.div`

    font-size: 32px;
    color: ${({ theme }) => theme.colors.primary};

`;