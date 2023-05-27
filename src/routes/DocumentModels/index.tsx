import { useContext, useEffect, useState } from "react";
import { AuthAdminContext } from "../../contexts/AuthAdminContext";
import LoginAdm from "../LoginAdm";
import Header from "../../components/Header";
import BaseScreen from "../../components/BaseScreen";
import TableWrapper from "../../components/TableWrapper";
import SearchBar from "../../components/SearchBar";
import Menu from "../../components/Menu";
import BgDisable from "../../components/BgDisable";
import { getDocumentModel } from "../../hooks/useApiDocuments";
import { useParams } from "react-router-dom";
import ListLineDocumentsModel from "../../components/ListLineDocumentsModel";
import ModalNewDocumentModel from "../../components/modals/ModalNewDocumentModel";
import { documentInterface } from "../Documents";
import ModalPreviewDocumentModel from "../../components/modals/ModalPreviewDocumentModel";

interface documentModelInterface {
    active: boolean;
    createdAt: string;
    digitalSignature: boolean;
    fields: string[];
    id: string;
    text: string[];
    title: string;
    updatedAt: string;
    documentType: documentInterface;
    typeId: string;
}
interface modelInterface {
    count: number;
    documentModels: documentModelInterface[];
    type: {
        content: string[];
        name: string;
    }
}

const DocumentModels = ():JSX.Element => {
    const adminContext = useContext(AuthAdminContext)
    const [modalNew, setModalNew] = useState<boolean>(false);
    const [modalPreview, setModalPreview] = useState<boolean>(false)
    const [models, setModels] = useState<modelInterface | null>(null)
    const {id} = useParams();

    const toggleModalNew = () => {
        setModalNew(!modalNew);
    }
    const toggleModalPreview = () => {
        setModalPreview(!modalPreview)
    }
        
    getDocumentModel(id);
    const response = getDocumentModel(id);

    useEffect(() => {
        response.then(resolve => {
            console.log(resolve)
            setModels(resolve.data)
           })
    }, [])

    if(adminContext.token || localStorage.getItem("token")){
        return(
            <>
            <Header name="Administrador"/>
            <Menu />
            <BaseScreen>
                <SearchBar />
                <TableWrapper text="Lista de modelos de documentos" toggleModal={toggleModalNew}>

                    {models && models.documentModels.map((model: documentModelInterface, index) => (
                        <ListLineDocumentsModel key={index} title={model.title} id={model.id} text={model.text}/>
                    ))}

                </TableWrapper>

            <ModalNewDocumentModel toggleModalPreview={toggleModalPreview} toggleModal={toggleModalNew} showModal={modalNew} title={`Cadastrar modelo de documento de ${models && models.type.name}`} inputs={models && models.type.content}/>
            <BgDisable toggleModal={toggleModalNew} showModal={modalNew}/>
            <ModalPreviewDocumentModel toggleModal={toggleModalPreview} toggleModalNew={toggleModalPreview} text="Preview" showModal={modalPreview} ></ModalPreviewDocumentModel>
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

export default DocumentModels;