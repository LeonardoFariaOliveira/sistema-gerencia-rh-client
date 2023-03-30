import styled from "styled-components";

interface showProps {
    show: boolean;
}

export const Container = styled.div<showProps>`

    width: 100%;
    padding-right: 32px;
    box-sizing: border-box;

    ul {
        overflow: hidden;
        display: ${ ({ show }) => show ? 'block' : 'none' };
        margin-top: 1rem;
        list-style: none;
        width: 100%;
        text-align: start;
        background-color: ${({ theme }) => theme.colors.primary};
        border-radius: 8px;
        padding: 16px 0;
        box-sizing: border-box;
        transition: all ease .4s;
    }

    li {
        font-size: 1rem;
        font-weight: 800;
        cursor: pointer;
        padding: 16px;
    }

`;

export const SelectionDiv = styled.div`

    display: flex;
    justify-content: space-between;
    margin-top: 24px;
    width: 100%;
    align-items: center;
    cursor: pointer;
    box-sizing: border-box;
    position: relative;

`;

export const SelectionIcon = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;

    img { 
        width: 32px;
        padding-right: 16px;
    }

`;

export const SelectionName = styled.p`

    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary};

`;

export const SelectionArrow = styled.img<showProps>`
    width: 32px;
    transform: ${ ({ show }) => show ? 'rotateZ(90deg)' : 'rotateZ(0deg)' };
`;