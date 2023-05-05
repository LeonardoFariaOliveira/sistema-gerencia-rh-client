import styled from "styled-components";

interface ContainerProps {
    showModal: boolean;
}

export const Container = styled.div<ContainerProps>`

    width: 100vw;
    height: 100vh;
    opacity: 0.5;
    background-color: black;
    position: fixed;
    display: ${({ showModal }) => showModal ? 'block' : 'none'};
    transition: all ease .8s;
    z-index: 9999;
    top: 0;
    left: 0;
`;