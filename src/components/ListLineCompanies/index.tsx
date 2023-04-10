import { Line, NameStyled, Item } from './style'

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
    return(
    <Line>
        <Line>
        <NameStyled>{ name }</NameStyled>
            <Item>{company.email}</Item>
            <Item>{company.phoneNumber}</Item>
            <Item>{company.createdAt}</Item>
    </Line>
    </Line>
    )
};
export default ListLineCompanies