import { Link } from "react-router-dom";
import styled from "styled-components";

interface menuProps {
    open: boolean,
}

export const Container = styled.div<menuProps>`

    position: fixed;
    z-index: 100;
    top: 0%;
    left: 0%;
    height: 100%;
    width: ${({ open }) => open ? '300px' : '80px' };
    background-color: ${({ theme }) => theme.colors.secondary};
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    transition: all ease .2s;
    ${({ open }) => open ? '300px' : '80px' };
    box-sizing: border-box;
`;

export const ItensWrapper = styled.div<menuProps>`

    display: ${({ open }) => open ? 'flex' : 'none' };
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    padding-left: 28px;

`;

export const LogoDiv = styled.div<menuProps>`

    display: ${({ open }) => open ? 'flex' : 'none' };
    align-items: center;
    justify-content: center;
    margin-top: 24px;
    box-sizing: border-box;

    p {
        font-size: 20px;
        font-weight: 900;
        color: ${({ theme }) => theme.colors.primary};
        margin: 32px 0;
        margin-left: 16px;
    }

`;

export const Dashboard = styled.div`
    
    display: flex;
    margin-top: 128px;
    justify-content: flex-start;
    width: 100%;
    box-sizing: border-box;
    align-items: center;

    p {
        font-size: 24px;
        font-weight: 600;
        color: ${({ theme }) => theme.colors.primary};
        margin-left: 16px;
    }
`;

export const ToggleBtn = styled.div`

    color: ${({ theme }) => theme.colors.primary};
    font-size: 40px;
    cursor: pointer;
    position: absolute;
    bottom: 18px;

`;

export const SectionName = styled.p`

    font-size: 16px;
    font-weight: 900;
    color: #7d9af0;
    margin-top: 44px;

`;

export const LinkStyled = styled(Link)`

    text-decoration: none;
    color: currentColor;

`;