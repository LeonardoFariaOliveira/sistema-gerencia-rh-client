import styled from "styled-components";
import ButtonSecondary from "../../components/buttons/ButtonSecondary";

export const EditForm = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    
    `;

export const UserImageArea = styled.div`

display: flex;
align-items: center;
justify-content: center;
font-size: 150px;
padding: 50px 0;

`;

export const UserImage = styled.div`

    background-color: #f2f2f2;
    border: 1px solid #aaa;
    max-width: 200px;
    width: 100%;
    display: flex;
    justify-content:center;
    padding: 15px 0px;

`;

export const FormDiv = styled.div`

    display: flex;
    width: 750px;
    height: auto;
    flex-direction: column;

`;

export const InputWrapper = styled.div`

    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

`;

export const ButtonSecondaryStyled = styled(ButtonSecondary)`

    margin-top: 64px;
    position: relative;
    z-index: 5;

`;

interface blockProps{
    block: boolean;
}

export const Block = styled.div<blockProps>`
    ${({ block }) => block ? 'pointer-events: none;' : 'pointer-events: all;'}

`;