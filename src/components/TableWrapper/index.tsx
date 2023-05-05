import { Container, Title, Header, Icon, Columns } from './style'
import { BiPlusMedical } from 'react-icons/bi'
import { Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';

interface TableProps {
    text: string;
    newElement?: () => void;
    children: any;
    items: any;
    toggleModal?: () => void;
}

const TableWrapper = ({ text, children, items, toggleModal }: TableProps): JSX.Element => {
    return(
        <Container>
            <Header>
                <Title>{ text }</Title>
                <Icon onClick={toggleModal}> <BiPlusMedical /> </Icon>
            </Header>
            <Columns>
                {items.map((item: { id: Key | null | undefined; content: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) => (
                    <li key={item.id}>{item.content}</li>
                ))}
                <li>Ações</li>
            </Columns>
            <div style={{display:"flex", flexDirection:"column", width: "calc(100% - 64px)" }}>
                { children }
            </div>
        </Container>
    )
};

export default TableWrapper;