import { FiEdit } from 'react-icons/fi';
import { Edit, IconDiv, Remove } from '../ListLineEmployees/style';
import { Line, NameStyled, Item } from './style'
import { FaTrashAlt } from 'react-icons/fa';
import BgDisable from '../BgDisable';
import ModalDelete from '../modals/ModalDeleteCompany';
import { useState } from 'react';
import ModalNewCompany from '../modals/ModalNewCompany';

interface LineProps {
    name: string;
    company: {
        createdAt: string;
        email: string;
        id: string;
        phoneNumber: string;
        popularName: string;
    }
}


const ListLineCompanies = ({name, company}: LineProps):JSX.Element => {

    const info = {
        name: company.popularName,
        email: company.email,
        number: company.phoneNumber
    }

    const [showModalDelete, setShowModalDelete] = useState<boolean>(false)
    
    const toggleModalDelete = () => {
        setShowModalDelete(!showModalDelete)
    }

    return(
    <>
    <Line>
        <Line>
        <NameStyled>{ name }</NameStyled>
            <Item>{company.email}</Item>
            <Item>{company.phoneNumber}</Item>
            <Item>{company.createdAt}</Item>
            <Item>
                <IconDiv>
                <Remove onClick={() => toggleModalDelete()}><FaTrashAlt /></Remove>
                </IconDiv>
            </Item>
    </Line>
    </Line>

    <BgDisable toggleModal={toggleModalDelete} showModal={showModalDelete} />
    <ModalDelete name={ name } id={ company.id } toggleModal={toggleModalDelete} showModal={showModalDelete}/>
    </>
    )
};
export default ListLineCompanies