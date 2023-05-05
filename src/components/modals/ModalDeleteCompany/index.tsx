import { useContext } from 'react'
import { IoMdClose } from 'react-icons/io';
import { Container, Header, Text, Icon, Delete, Body } from './style'
import { deleteCompany } from '../../../hooks/useApi';
import { AuthAdminContext } from '../../../contexts/AuthAdminContext';

interface ModalInterface {
    name: string;
    id: string;
    toggleModal: () => void;
    showModal: boolean; 
}


const ModalDelete = ({ toggleModal, showModal, name, id }: ModalInterface):JSX.Element => {

    const adminContext = useContext(AuthAdminContext)

    return(
        <Container showModal={showModal}>
            <Header>
                <Text>
                    Deseja mesmo deletar {name}?
                </Text>
                <Icon onClick={() => toggleModal()}><IoMdClose /></Icon>
            </Header>
            <Body>
                <Delete onClick={() => {
                    
                    toggleModal()
                    deleteCompany(id, adminContext.token);
                
                }}> <p> Deletar </p> </Delete>
            </Body>
        </Container>
    )
};

export default ModalDelete;