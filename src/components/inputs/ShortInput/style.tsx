import styled from "styled-components";

export const Container = styled.div`

    height: auto;
    width: 250px;
    margin: 24px 0;
    box-sizing: border-box;

`;

export const Title = styled.div`

    font-size: 24px;
    font-weight: 500;
    color: ${({ theme }) => theme.text.secondary};
    padding-bottom: 16px;

`;