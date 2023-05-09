import BaseScreen from "../../components/BaseScreen";
import SearchBar from "../../components/SearchBar";
import TableWrapper from "../../components/TableWrapper";
import { SetStateAction, useContext, useEffect, useState } from "react";
import { getCompany, useGetEmployees } from "../../hooks/useApi";
import ModalNewEmployee from "../../components/modals/ModalNewEmployee";
import BgDisable from "../../components/BgDisable";
import Header from "../../components/Header";
import { Navigate } from "react-router-dom";
import { AuthUserContext } from "../../contexts/AuthUserContext";
import ListLineEmployees from "../../components/ListLineEmployees";
import LoginUser from "../LoginUser";
import ModalDelete from "../../components/modals/ModalDeleteCompany";
import MenuUser from "../../components/MenuUser";
const EmployeeList = ():JSX.Element => {
    
    const userContext = useContext(AuthUserContext)
    const [showModal, setShowModal] = useState<boolean>(false)
    const [showModalDelete, setShowModalDelete] = useState<boolean>(false)
    const [employees, setEmployees] = useState<EmployeeInfo[]>([]);


    const id = userContext.idUser ?? localStorage.getItem("id")
    const nameCompany = userContext.popularNameUser
    
    const response = useGetEmployees(id);
    // const isUserActive = useGetCompany(id);


    const toggleModal = () => {
        setShowModal(!showModal)
    }
    const toggleModalDelete = () => {
        setShowModal(!showModalDelete)
    }
    
    useEffect(() => {
        getCompany(id).then(resolve => {
            console.log(resolve)
            if(resolve.status === 401)
                localStorage.clear()
            console.log(resolve)
        })
        response.then(resolve => {
            console.log(resolve)
            if(resolve.status === 401)
                localStorage.clear()
            console.log(resolve.data.data)
            return resolve.data
        }).then(data => setEmployees(data.data.employees))
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
            <MenuUser />
            <Header name={localStorage.name}/>
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
        
    }
    else if(localStorage.getItem("tokenUser")){
        return(
            <>
            <MenuUser />
            <Header name={localStorage.name}/>
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
    }
    else{
        return (
            <>
                {
                    
                    localStorage.clear()
                }
                {/* <Navigate to={'/user'}/> */}
                <LoginUser />
            </>
        )
    }
};

export default EmployeeList