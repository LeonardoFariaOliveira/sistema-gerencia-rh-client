import BaseScreen from "../../components/BaseScreen";
import SearchBar from "../../components/SearchBar";
import TableWrapper from "../../components/TableWrapper";
import { useContext, useEffect, useState } from "react";
import { useGetEmployees } from "../../hooks/useApi";
import ModalNewEmployee from "../../components/ModalNewEmployee";
import BgDisable from "../../components/BgDisable";
import Menu from "../../components/Menu";
import Header from "../../components/Header";
import { Navigate } from "react-router-dom";
import { AuthUserContext } from "../../contexts/AuthUserContext";
import ListLineEmployees from "../../components/ListLineEmployees";
const EmployeeList = ():JSX.Element => {
    
    const userContext = useContext(AuthUserContext)
    const [showModal, setShowModal] = useState<boolean>(false)
    const [employees, setEmployees] = useState<EmployeeInfo[]>([]);

    const response = useGetEmployees(userContext.idUser);


    const toggleModal = () => {
        setShowModal(!showModal)
    }
    
    useEffect(() => {
        response.then(resolve => resolve.data).then(data => setEmployees(data.data.employees))
    }, [showModal])
    

    interface EmployeeInfo {
        admissionDate: string;
        birthDate: string;
        id: string;
        job: string;
        name: string;
        salary: number;
        sector: string;
    } 
    
    const itemsHeader = [
        { id: 1, content: 'Nome' },
        { id: 2, content: 'Cargo' },
        { id: 3, content: 'Setor' },
        { id: 4, content: 'Início' },
        { id: 5, content: 'Data de nascimento' },
        { id: 6, content: 'Salário' },
      ];


    
    if(userContext.tokenUser){
        return(
            <>
            <Menu />
            <Header name="Cyberswitch" user="admin"/>
            <BaseScreen>
            <SearchBar />
            <TableWrapper text="Lista de funcionários/colaboradores " items={ itemsHeader } toggleModal={toggleModal}>
                <>
                {employees.map((item) => (
                <ListLineEmployees name={item.name} employee={ item }/>
                ))}
                </> 
            </TableWrapper>
            </BaseScreen>
    
            <ModalNewEmployee toggleModal={toggleModal} showModal={showModal} />
            <BgDisable toggleModal={toggleModal} showModal={showModal}/>
            </>
        )
    }else{
        return (
            <Navigate to={'/'}/>
        )
    }
};

export default EmployeeList