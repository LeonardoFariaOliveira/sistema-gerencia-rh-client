import React, { useState } from 'react';
import { Container, SelectionArrow, SelectionDiv, SelectionIcon, SelectionName } from './style'
import arrowLeft from '../../assets/icon/arrowLeft.svg'

interface selectionProps {

    text: string;
    img: any;
    children: any;
}

const SelectionStyled: React.FC <selectionProps> = ({ img, text, children }) => {

    const  [showSelect, setShowSelect] = useState(false)
    const toggleSelect = () => {
        setShowSelect(!showSelect)
    }

    return(
    
    <Container show={ showSelect }>
        <SelectionDiv onClick={() => toggleSelect()}>
            <SelectionIcon>
                <img src={img} alt="icon" />
                <SelectionName> { text } </SelectionName>
            </SelectionIcon>
            <SelectionArrow show={ showSelect } src={ arrowLeft } alt="Empresa" />
        </SelectionDiv>
        { children }
    </Container>
    
    )
};

export default SelectionStyled;