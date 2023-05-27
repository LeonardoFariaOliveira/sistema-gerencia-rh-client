import { Link } from "react-router-dom";
import styled from "styled-components";

export const Line = styled.ul`

    width: 100%;
    height: 145px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: solid 1px ${({ theme }) => theme.colors.stroke};
    box-sizing: border-box;

`;

export const NameStyled = styled(Link)`

    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.secondary};
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-left: solid 1px ${({ theme }) => theme.colors.stroke};
    text-align: center;
    text-decoration: none;

`;

export const Item = styled.li`

    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.text.secondary};
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    border-left: solid 1px ${({ theme }) => theme.colors.stroke};
    padding: 16px;


`;