import styled from "styled-components";

export const Container = styled.div<any>`

    background-color: ${({ theme }) => theme.colors.primary};
    -webkit-box-shadow: 0px 0px 15px 2px rgba(0,0,0,0.40);
    -moz-box-shadow: 0px 0px 15px 2px rgba(0,0,0,0.40);
    box-shadow: 0px 0px 15px 2px rgba(0,0,0,0.40);
    width: 950px;
    box-sizing: border-box;
    position: absolute;
    left: 50%;
    top: 5%;
    transform: translate(${({ showModal }) => showModal ? '-50% , 0%' : '-50% , -200vh'});
    transition: all ease .8s;
    z-index: 99998;

`;

export const Header = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 48px;
    width: 100%;
    height: 92px;
    border-bottom: solid 1px ${({ theme }) => theme.text.secondary};
    color: ${({ theme }) => theme.text.secondary};
    font-size: 32px;
    font-weight: 700;
    box-sizing: border-box;

`;

export const CloseBtn = styled.div`

    color: ${({ theme }) => theme.text.secondary};
    font-size: 32px;
    font-weight: 800;
    cursor: pointer;

`;

export const OptionsWrapper = styled.div`
    padding-top: 32px;
    padding-bottom: 32px;
    padding-left: 48px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 564px;
`;

export const ShortInputsDiv = styled.div`

    display: flex;
    width: 100%;
    box-sizing: border-box;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

`;

export const Spacement = styled.div`

    height: 56px;

`;

export const InfoWrapper = styled.div`

    display: flex;

`;

export const IconAdd = styled.div`

    position: relative;
    top: 64px;
    right: 0px;
    font-size: 36px;
    color: ${({ theme }) => theme.colors.secondary};
    cursor: pointer;

`;

export const TagInput = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`;

export const NewField = styled.div`

    position: relative;
    top: 22px;
    right: -25px;
    font-size: 36px;
    color: ${({ theme }) => theme.colors.secondary};
    cursor: pointer;

`;

export const Field = styled.div`

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: auto;
    width: auto;
    box-sizing: border-box;

    p{
        font-size: 22px;
        font-weight: bold;
        color: ${({ theme }) => theme.text.secondary};
        margin-top: 22px;
        margin-bottom: -22px;
    }
`

export const SelectStyled = styled.select`

    width: 250px;
    border: solid ${({ theme }) => theme.text.secondary} 1px;
    height: 40px;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 500;
    padding: 0 16px;
    margin-top: 40px;
    margin-left: 12px;
    
    `;

export const OptionStyled = styled.option`
    
    color: ${({ theme }) => theme.text.secondary};
    font-weight: 500;

`;