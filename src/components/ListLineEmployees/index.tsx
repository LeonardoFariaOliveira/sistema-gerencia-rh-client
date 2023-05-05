import { useState } from 'react'
import { Line, NameStyled, Item, Remove, IconDiv, Edit } from './style'
import { FaTrashAlt } from 'react-icons/fa'
import { FiEdit } from 'react-icons/fi'
import BgDisable from '../BgDisable';
import ModalDeleteEmployee from '../modals/ModalDeleteEmployee';

interface LineProps {
    name: string;
    employee: {
        job: string;
        sector: string;
        admissionDate: string;
        birthDate: string;
        salary: number;
        id: string
    };
}



const deleteUser = (name: string) => {
    alert(name)
}

const ListLineEmployees = ({name, employee}: LineProps):JSX.Element => {

    const [showModalDelete, setShowModalDelete] = useState<boolean>(false)
    
    
    const toggleModalDelete = () => {
        setShowModalDelete(!showModalDelete)
    }


    return(
    <>
    <Line>
        <NameStyled>{ name }</NameStyled>
            <Item>{employee.job}</Item>
            <Item>{employee.sector}</Item>
            <Item>{employee.admissionDate}</Item>
            <Item>{employee.birthDate}</Item>
            <Item>{employee.salary}</Item>
            <Item>
                <IconDiv>
                <Remove onClick={() => toggleModalDelete()}><FaTrashAlt /></Remove>
                <Edit><FiEdit /></Edit>
                </IconDiv>
            </Item>
    </Line>

    <BgDisable toggleModal={toggleModalDelete} showModal={showModalDelete} />
    <ModalDeleteEmployee name={ name } id={ employee.id } toggleModal={toggleModalDelete} showModal={showModalDelete}/>
    </>
    )
};
export default ListLineEmployees