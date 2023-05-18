import { useContext, useState } from "react";
import { AuthAdminContext } from "../../contexts/AuthAdminContext";
import LoginAdm from "../LoginAdm";
import Header from "../../components/Header";
import BaseScreen from "../../components/BaseScreen";
import TableWrapper from "../../components/TableWrapper";
import SearchBar from "../../components/SearchBar";
import Menu from "../../components/Menu";
import BgDisable from "../../components/BgDisable";
import ModalNewDocument from "../../components/modals/ModalNewDocument";

const Documents = ():JSX.Element => {

    const adminContext = useContext(AuthAdminContext)

    const [showModalNew, setShowModalNew] = useState<boolean>(false);

    const toggleModalNew = () => {
        setShowModalNew(!showModalNew);
    }
    
    const items = {}

    if(adminContext.token || localStorage.getItem("token")){
        return(
            <>
            <Header name="Administrador"/>
            <Menu />
            <BaseScreen>
                <SearchBar />
                <TableWrapper text="Tipos de documentos" toggleModal={toggleModalNew}>

                </TableWrapper>

                <ModalNewDocument toggleModal={toggleModalNew} showModal={showModalNew} text="Cadastrar novo tipo de documento"/>
                <BgDisable toggleModal={toggleModalNew} showModal={showModalNew}/>
            </BaseScreen>
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

export default Documents;