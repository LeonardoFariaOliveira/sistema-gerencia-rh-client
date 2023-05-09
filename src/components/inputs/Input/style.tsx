import styled from "styled-components";

interface blockProps{
    block?: boolean;
}

export const InputStyled = styled.input<blockProps>`

    box-sizing: border-box;
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border-style: solid;
    border-width: 1px;
    border-color: ${({ theme }) => theme.text.secondary};
    padding-left: 16px;
    ${({ block }) => block ? "background-color:#F2F2F2" : "background-color:inherit"};
    ${({ block }) => block ? "cursor:auto" : "background-color:inherit"};
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