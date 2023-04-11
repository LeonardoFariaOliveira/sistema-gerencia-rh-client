import styled from "styled-components";

export const LoginForm = styled.form`

    width: 575px;
    height: auto;
    -webkit-box-shadow: 0px 0px 15px 2px rgba(0,0,0,0.40);
    -moz-box-shadow: 0px 0px 15px 2px rgba(0,0,0,0.40);
    box-shadow: 0px 0px 15px 2px rgba(0,0,0,0.40);
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.primary};
    padding-bottom: 84px;
    box-sizing: border-box;
`;

export const Title = styled.p`

    font-size: 32px;
    font-weight: 900;
    color: ${({ theme }) => theme.colors.tertiary};
    margin-bottom: 44px;
    margin-top: 24px;

`;

export const InputStyled = styled.input`

    width: 480px;
    height: 50px;
    margin: 12px 0;
    border-radius: 5px;
    border-style: solid;
    border-width: 1px;
    border-color: ${({ theme }) => theme.text.secondary};
    padding-left: 20px;
    font-size: 16px;
    
    ::-webkit-input-placeholder{
        color: ${({ theme }) => theme.text.secondary};
        font-style: 500;
        font-size: 18px;
}
    ::-moz-placeholder {
        color: ${({ theme }) => theme.text.secondary};
        font-style: 500;
        font-size: 18px;;
}
`;

export const PassRecoveryStyled = styled.a`

    text-decoration: none;
    color: #074692;
    font-size: 16px;
    font-weight: 900;
    padding-top: 16px;
    cursor: pointer;
`;