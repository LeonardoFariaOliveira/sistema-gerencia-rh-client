import { FaTrashAlt } from 'react-icons/fa';
import { Item, Line, NameStyled } from '../ListLineCompanies/style'
import { Remove, IconDiv } from '../ListLineEmployees/style';
import { Edit } from './style'
import { BiEdit } from 'react-icons/bi';

interface DocumentsProps{
    title: string;
    text: string[];
    fields?: string[];
    active?:boolean;
    id: string;
}

export const ListLineDocumentsModel = ({ title, text, id }: DocumentsProps):JSX.Element => {
    return(
        <Line>
            <NameStyled to={`/documentModels/${id}`}> {title} </NameStyled>
            
            {text && text.map((item, index) => (
                <Item key={index}> {item} </Item>
            ))}

            <Item>
                <IconDiv>
                    <Remove onClick={() => alert('removendo modelo de documento')}> <FaTrashAlt /> </Remove>
                    <Edit onClick={() => alert('editando modelo de documento')}> <BiEdit /> </Edit>
                </IconDiv>
            </Item>
        </Line>
    )
};

export default ListLineDocumentsModel;