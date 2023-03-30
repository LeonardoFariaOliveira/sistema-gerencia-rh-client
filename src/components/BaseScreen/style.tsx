import styled from "styled-components";


export const Container = styled.div`

    width: calc(100vw - 80px);
    min-height: calc(100vh - 168px);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: start;
    background-color: ${({ theme }) => theme.colors.primary};
    box-sizing: border-box;
    padding:  0 76px;
    position: absolute;
    right: 0;
    top: 168px;
    padding-bottom: 64px;


`;