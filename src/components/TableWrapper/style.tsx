import styled from "styled-components";

export const Container = styled.div`

    background-color: ${({ theme }) => theme.colors.primary};
    border: solid 1px ${({ theme }) => theme.colors.stroke};
    height: auto;
    border-radius: 16px;
    width: 100%;
    max-width: 2500px;
    box-sizing: border-box;
    `;

export const Header = styled.div`

    box-sizing: border-box;
    border-radius: 16px 16px 0 0px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 32px;
    height: 56px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.bg};
    border-bottom: solid 1px ${({ theme }) => theme.colors.stroke};

`;

export const Title = styled.div`

    font-size: 20px;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.secondary};

`;

export const Icon = styled.div`

    font-size: 28px;
    cursor: pointer;
    color: green;

`;

export const Table = styled.div`
    
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 16px 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    ul{
        width: 100%;
        li{
        height: 145px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border: solid 1px ${({ theme }) => theme.colors.stroke};
        font-size: 16px;
        font-weight: 600;
        }
    }
        
`;