import { Container, Title, Table, Header, Icon } from './style'
import { BiPlusMedical } from 'react-icons/bi'

interface TableProps {
    text: string;
    newElement?: () => void;
    children: JSX.Element;
}

const TableWrapper = ({ text, children }: TableProps): JSX.Element => {
    return(
        <Container>
            <Header>
                <Title>{ text }</Title>
                <Icon onClick={() => alert('Adicionar')}> <BiPlusMedical /> </Icon>
            </Header>
            <Table>
                { children }
            </Table>
        </Container>
    )
};

export default TableWrapper;