import { useState } from 'react';
import { IoMdClose, IoMdMenu } from 'react-icons/io'
import { Container, ToggleBtn, ItensWrapper , LogoDiv , Dashboard, SectionName, LinkStyled } from './style'
import logoIcon from '../../assets/icon/logo.svg'
import dashboard from '../../assets/icon/dashboard.svg'
import gear from '../../assets/icon/gear.svg'
import doc from '../../assets/icon/doc.svg'
import SelectionStyled from '../SelectionStyled';
import { Link } from 'react-router-dom'

const Menu: React.FC = () => {

    const linkStyle = {
        textDecoration: "none",
        color: "currentColor"
    }

    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    return(
        <Container open={ showMenu }>

            <Link style={{textDecoration: "none"}} to={"/"}>
            <LogoDiv onClick={() => toggleMenu()} open={ showMenu }>
                <img src={ logoIcon } alt="GEDIRH Logo" />
                <p> GEDIRH </p>
            </LogoDiv>
            </Link>

            <ItensWrapper open={ showMenu }>
                <Dashboard>
                    <img src={ dashboard } alt="dashboard" />
                    <p> Dashboard </p>
                </Dashboard>
                <SectionName> CADASTROS </SectionName>

                <SelectionStyled text={ 'Empresas' } img={ gear }>
                    <ul>
                        <li onClick={() => toggleMenu()}> <LinkStyled to={'/companyList'} > Listar Empresas </LinkStyled> </li>
                    </ul>
                </SelectionStyled>

                <SectionName> DOCUMENTOS </SectionName>

                <SelectionStyled text={ 'Emissão' } img={ doc } >
                    <ul>
                        <li onClick={() => toggleMenu()}> <LinkStyled to={'/documents'} > Tipos de documentos </LinkStyled> </li>
                    </ul>
                </SelectionStyled>
            </ItensWrapper>

            <ToggleBtn onClick={() => toggleMenu()} >
                { showMenu? <IoMdClose /> : <IoMdMenu /> } 
            </ToggleBtn>
        </Container>
    )
};

export default Menu;