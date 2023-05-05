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

export const NameStyled = styled.li`

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
    padding: 16px;
    text-align: center;

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
    text-align: center;
    padding: 16px;

`;

export const IconDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Remove = styled.div`

    color: #E74A3B;
    font-size: 24px;
    cursor: pointer;
    margin-bottom: 16px;

`;

export const Edit = styled.div`

    color: #F6C23E;
    font-size: 28px;
    cursor: pointer;

`;