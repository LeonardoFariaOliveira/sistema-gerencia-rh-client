import { Container, Name, Logged } from './style'
import userPicture from '../../assets/icon/userPicture.svg'
import { useState } from 'react';
import ModalNewCompany from '../modals/ModalNewCompany';
import BgDisable from '../BgDisable';
import { info } from 'console';
import ModalEditCompany from '../modals/ModalEditCompany';

interface HeaderProps {
    name: string; 
}

const Header = ({ name }: HeaderProps): JSX.Element => {

    const [showModalEdit, setShowModalEdit] = useState<boolean>(false)
    
    const toggleModalEdit = () => {
        setShowModalEdit(!showModalEdit)
    }

    const info= {}

    return(
        <>
        <Container>
            <Name onClick={() => toggleModalEdit()} > { name } </Name>
            {/* <div>
                <Logged> { user } logado </Logged>
                <img src={ userPicture } alt='user' />
            </div> */}
        </Container>
        <BgDisable toggleModal={toggleModalEdit} showModal={showModalEdit} />
        <ModalEditCompany text='Editar informações da empresa' info={info} toggleModal={toggleModalEdit} showModal={showModalEdit}/>
        </>
    )
};

export default Header;