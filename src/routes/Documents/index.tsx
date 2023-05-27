import { useContext, useEffect, useState } from "react";
import { AuthAdminContext } from "../../contexts/AuthAdminContext";
import LoginAdm from "../LoginAdm";
import Header from "../../components/Header";
import BaseScreen from "../../components/BaseScreen";
import TableWrapper from "../../components/TableWrapper";
import SearchBar from "../../components/SearchBar";
import Menu from "../../components/Menu";
import BgDisable from "../../components/BgDisable";
import ModalNewDocument from "../../components/modals/ModalNewDocumentType";
import ModalPreviewDocumentType from "../../components/modals/ModalPreviewDocumentType";
import ListLineDocumentsType from "../../components/ListLineDocumentsType";
import { getDocumentType } from "../../hooks/useApiDocuments";

export interface documentInterface{
    id: string;
    name: string;
    content: string[];
}

const Documents = ():JSX.Element => {

    const [type, setType] = useState<string>('');
    const [infos, setInfos] = useState<string[]>([""]);

    const adminContext = useContext(AuthAdminContext)

    const [showModalNew, setShowModalNew] = useState<boolean>(false);
    const [showModalPreview, setShowModalPreview] = useState<boolean>(false);

    const toggleModalNew = () => {
        setShowModalNew(!showModalNew);
    }
    const toggleModalPreview = () => {
        setShowModalPreview(!showModalPreview);
    }
    
    const items = [
        { id: 1, content: 'Tipo' },
        { id: 2, content: 'Informações' },
        { id: 3, content: 'Ações' },
      ];

    const [document, setDocument] = useState<[] | null>(null)

    const response = getDocumentType();

    useEffect(() => {
        response.then(resolve => {
            setDocument(resolve.documentTypes)
           })
    }, [])

    if(adminContext.token || localStorage.getItem("token")){
        return(
            <>
            <Header name="Administrador"/>
            <Menu />
            <BaseScreen>
                <SearchBar />
                <TableWrapper text="Lista de tipos de documentos" toggleModal={toggleModalNew} items={items}>

                    {document && document.map((type: documentInterface, index) => (
                        <ListLineDocumentsType key={type.id} type={type.name} id={type.id} infos={type.content}/>
                    ))}

                </TableWrapper>

                <ModalNewDocument toggleModal={toggleModalNew} type={type} setType={setType} infos={infos} setInfos={setInfos} toggleModalPreview={toggleModalPreview} showModal={showModalNew} text="Cadastrar novo tipo de documento"/>
                <BgDisable toggleModal={toggleModalNew} showModal={showModalNew}/>
                <ModalPreviewDocumentType type={type} infos={infos} toggleModal={toggleModalPreview } toggleModalNew={toggleModalNew} showModal={showModalPreview} text="Preview"/>
                <BgDisable toggleModal={toggleModalPreview} showModal={showModalPreview}/>
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