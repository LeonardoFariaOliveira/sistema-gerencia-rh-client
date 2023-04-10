import { Line, NameStyled, Item } from './style'

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

const ListLineEmployees = ({name, employee}: LineProps):JSX.Element => {
    return(
    <Line>
        <NameStyled>{ name }</NameStyled>
            <Item>{employee.job}</Item>
            <Item>{employee.sector}</Item>
            <Item>{employee.admissionDate}</Item>
            <Item>{employee.birthDate}</Item>
            <Item>{employee.salary}</Item>
    </Line>
    )
};
export default ListLineEmployees