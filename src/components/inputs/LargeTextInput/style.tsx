import styled from "styled-components";

interface blockProps{
    block?: boolean;
}

export const InputStyled = styled.textarea`

    box-sizing: border-box;
    resize: none;
    width: 870px;
    height: 260px;
    border-radius: 5px;
    border-style: solid;
    border-width: 1px;
    border-color: ${({ theme }) => theme.text.secondary};
    padding-left: 16px;
    padding-top: 16px;
    font-size: 16px;


`;