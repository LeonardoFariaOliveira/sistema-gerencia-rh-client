import styled from "styled-components";

export const Container = styled.div`

    background-color: ${({ theme }) => theme.colors.primary};
    border: solid 1px ${({ theme }) => theme.colors.stroke};
    height: auto;
    border-radius: 16px;
    width: 100%;
    max-width: 2500px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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


export const Columns = styled.ul`

    margin: 0 32px;
    margin-top: 16px;
    width: calc(100% - 64px);
    height: 56px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    box-sizing: border-box;
    border: solid 1px ${({ theme }) => theme.colors.stroke};

    li{
        font-size: 18px;
        width: 100%;
        height: 145px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 800;
        color: ${({ theme }) => theme.text.secondary};
        }
`;

export const NameEmployee = styled.p`

        color: ${({ theme }) => theme.colors.secondary};
        font-weight: 800;
        cursor: pointer;
        font-size: 16px;
        padding: 16px;
        text-align: center;

`;

export const NameCompany = styled.p`

        color: ${({ theme }) => theme.colors.secondary};
        font-weight: 800;
        cursor: pointer;
        font-size: 16px;
        text-align: center;

`;