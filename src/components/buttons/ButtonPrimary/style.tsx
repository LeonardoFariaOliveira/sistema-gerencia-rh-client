import styled from "styled-components";

export const InputButton = styled.button`

    width: 510px;
    height: 80px;
    background-color: #074692;
    font-size: 24px;
    font-weight: 900;
    color: ${({ theme }) => theme.colors.primary};
    border-radius: 5px;
    margin-top: 38px;
    cursor: pointer;
    border-style: none;
    font-family: 'Nunito', sans-serif;

`;