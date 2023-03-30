import BaseScreen from "../../components/BaseScreen";
import SearchBar from "../../components/SearchBar";
import TableWrapper from "../../components/TableWrapper";

const EmployeeList = ():JSX.Element => {
    return(
        
        <BaseScreen>
        <SearchBar />
        <TableWrapper text="Lista de funcionários/colaboradores ">
            <>
            <ul style={{ color: '#3B61D0' }} >
                <li> Leonardo Faria </li>
                <li> Ícaro Queiroz </li>
                <li> Leonardo Borges </li>
                <li> Gabriel Gallo </li>
            </ul>
            <ul>
                <li> back-end </li>
                <li> back-end </li>
                <li> back-end </li>
                <li> back-end </li>
            </ul>
            <ul>
                <li> back-end </li>
                <li> back-end </li>
                <li> back-end </li>
                <li> back-end </li>
            </ul>
            <ul>
                <li> back-end </li>
                <li> back-end </li>
                <li> back-end </li>
                <li> back-end </li>
            </ul>
            <ul>
                <li> back-end </li>
                <li> back-end </li>
                <li> back-end </li>
                <li> back-end </li>
            </ul>
            </>
        </TableWrapper>
        </BaseScreen>

    )
};

export default EmployeeList