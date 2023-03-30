import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    height: 50px;
    width: 100%;
    max-width: 950px;
    overflow: hidden;
    box-sizing: border-box;
    margin: 56px 0;

`;

export const Input = styled.input`

    width: 890px;
    height: 100%;
    background-color: #f2f2f2;
    font-size: 20px;
    outline: none;
    padding-left: 32px;
    border: none;
    
    ::-webkit-input-placeholder{
        color: ${({ theme }) => theme.text.secondary};
        font-style: 500;
        font-size: 20px;
}
    ::-moz-placeholder {
        color: ${({ theme }) => theme.text.secondary};
        font-style: 500;
        font-size: 20px;;
}

`;

export const Icon = styled.div`

    width: 60px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
    font-size: 28px;
    font-weight: 700;
    cursor: pointer;

`;