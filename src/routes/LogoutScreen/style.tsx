import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`

    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

`;

export const LinksWrapper = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;

export const LinkStyled = styled(Link)`

    color: ${({ theme }) => theme.colors.secondary};
    font-weight: 900;
    font-size: 24px;
    text-decoration: none;
    margin: 16px;

`;