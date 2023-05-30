import { FaTrashAlt } from 'react-icons/fa';
import { Item, Line, NameStyled } from '../ListLineCompanies/style'
import { Remove, IconDiv } from '../ListLineEmployees/style';
import { Edit } from './style'
import { BiEdit } from 'react-icons/bi';

interface DocumentsProps{
    type: string;
    infos: string[];
    id: string;
}

export const ListLineDocumentsType = ({ type, infos, id }: DocumentsProps):JSX.Element => {
    
    console.log(infos)
    return(
        <Line>
            <NameStyled to={`/documentModels/${id}`}> {type} </NameStyled>
            
            {infos ? infos.map((info, index) => (
                <Item key={index}> {info} </Item>
            )) : null}

            <Item>
                <IconDiv>
                    <Remove onClick={() => alert('removendo tipo de documento')}> <FaTrashAlt /> </Remove>
                    <Edit onClick={() => alert('editando tipo de documento')}> <BiEdit /> </Edit>
                </IconDiv>
            </Item>
        </Line>
    )
};

export default ListLineDocumentsType;