import BaseScreen from "../../components/BaseScreen";
import SearchBar from "../../components/SearchBar";
import TableWrapper from "../../components/TableWrapper";

const CompanyList = ():JSX.Element => {
    return(

        <BaseScreen>
        <SearchBar />
        <TableWrapper text="Lista de empresas cadastradas">
            <ul style={{ color: "green" }}>
                <li> modelo </li>
                <li> ausencia injustificada </li>
                <li> ausencia injustificada </li>
                <li> ausencia injustificada </li>
                <li> ausencia injustificada </li>
            </ul>
        </TableWrapper>
        </BaseScreen>  
        
        )
};

export default CompanyList;