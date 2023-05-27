import { useContext, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import BaseScreen from "../../components/BaseScreen";
import BgDisable from "../../components/BgDisable";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import ModalNewCompany from "../../components/modals/ModalNewCompany";
import SearchBar from "../../components/SearchBar";
import TableWrapper from "../../components/TableWrapper";
import { NameCompany } from "../../components/TableWrapper/style";
import { AuthAdminContext } from "../../contexts/AuthAdminContext";
import { useGetCompanies } from "../../hooks/useApi";
import ListLineEmployees from "../../components/ListLineEmployees";
import ListLineCompanies from "../../components/ListLineCompanies";
import LoginAdm from "../LoginAdm";
import ModalDelete from "../../components/modals/ModalDeleteCompany";

const CompanyList = ():JSX.Element => {
    
    const adminContext = useContext(AuthAdminContext)
    const [companies, setCompanies] = useState<CompanieInfo[]>([])
    const [showModal, setShowModal] = useState<boolean>(false)

    interface CompanieInfo {
        createdAt: string;
        email: string;
        id: string;
        phoneNumber: string;
        popularName: string;
    } 

    const items = [
        { id: 1, content: 'Nome Fantasia' },
        { id: 2, content: 'E-mail' },
        { id: 3, content: 'Telefone' },
        { id: 4, content: 'Data de criação' },
        { id: 4, content: 'Ações' },
      ];

    const response = useGetCompanies();

    const toggleModal = () => {
        setShowModal(!showModal)
    }
    

    useEffect(() => {
        response.then(resolve => {
            if(resolve.status === 401)
            localStorage.clear()
            return resolve.data
        }).then(data => setCompanies(data.companies))
    }, [showModal])

    if(adminContext.token || localStorage.getItem("token")){
        return(
            <>
            <Menu />
            <Header name="Administrador"/>
            <BaseScreen>
            <SearchBar />
            <TableWrapper text="Lista de empresas cadastradas" items={items} toggleModal={toggleModal}>
            <>
            {companies.map((item) => (
            <ListLineCompanies key={item.id} name={item.popularName} company={ item }/>
            ))}
            </> 
            </TableWrapper>
            </BaseScreen>

            <ModalNewCompany text='Cadastre uma empresa' toggleModal={toggleModal} showModal={showModal} />
            <BgDisable toggleModal={toggleModal} showModal={showModal} />
            </> 
            
        )
    }
    else{
        return (
            <>
                {
                    localStorage.clear()
                }
                {/* <Navigate to={'/adm'}/> */}
                <LoginAdm />
            </>
        )
    }

};

export default CompanyList;