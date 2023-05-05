import styled from "styled-components";

interface ContainerProps {
    showModal: boolean;
}

export const Container = styled.div<ContainerProps>`

    width: 900px;
    height: auto;
    background-color: ${({ theme }) => theme.colors.primary};
    position: absolute;
    top: 50vh;
    left: 50vw;
    z-index: 99998;
    transform: translate(${({ showModal }) => showModal ? 'calc(-50% + -80px) , -100%' : 'calc(-50% + -80px) , -100vh'});
    transition: all ease .8s;

`;

export const Header = styled.div`

    width: 100%;
    padding: 16px 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    border-bottom: solid 2px ${({theme}) => theme.colors.stroke};
    margin-bottom: 64px;

`;

export const Text = styled.p`

    color: ${({ theme }) => theme.text.secondary};
    font-weight: bold;
    font-size: 24px;

`;

export const Icon = styled.div`

    color: ${({ theme }) => theme.text.secondary};
    font-size: 28px;
    font-weight: 800;
    cursor: pointer;

`;

export const Body = styled.div`

    width: 100%;
    height: 100%;
    padding: 16px 48px;
    display: flex;
    align-items: end;
    justify-content: end;
    box-sizing: border-box;
`;

export const Delete = styled.div`

    width: 164px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: #E74A3B;
    border-radius: 4px;


    p{
        color: white;
        font-weight: bold;
        font-size: 24px;
    }

`;