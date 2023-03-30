import styled from "styled-components";

export const Container = styled.div`

    height: auto;
    width: 100%;
    margin: 24px 0;

`;

export const Title = styled.p`

    font-size: 24px;
    font-weight: 500;
    color: ${({ theme }) => theme.text.secondary};
    padding-bottom: 16px;

`;

export const InputStyled = styled.input`

    box-sizing: border-box;
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border-style: solid;
    border-width: 1px;
    border-color: ${({ theme }) => theme.text.secondary};
    cursor: pointer;
    padding-left: 16px;
    font-size: 16px;
    color: ${({ theme }) => theme.text.primary};
    outline-color: ${({ theme }) => theme.text.primary};
    
    ::-webkit-input-placeholder{
        color: ${({ theme }) => theme.text.secondary};
        font-style: 500;
        font-size: 16px;
}
    ::-moz-placeholder {
        color: ${({ theme }) => theme.text.secondary};
        font-style: 500;
        font-size: 16px;;
}

`;