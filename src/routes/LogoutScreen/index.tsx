import { useContext } from 'react';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import { AuthAdminContext } from '../../contexts/AuthAdminContext';
import EmployeeList from '../EmployeeList';
import LoginAdm from '../LoginAdm';
import { Container, LinksWrapper, LinkStyled } from './style'

const LogoutScreen = (): JSX.Element => {
    
    return(
        <Container>
            <LinksWrapper>
                <LinkStyled to={'/adm'}>Entrar como Administrador</LinkStyled>
                <LinkStyled to={'/user'}>Entrar como Usuário</LinkStyled>
            </LinksWrapper>
        </Container>
    )

};

export default LogoutScreen;