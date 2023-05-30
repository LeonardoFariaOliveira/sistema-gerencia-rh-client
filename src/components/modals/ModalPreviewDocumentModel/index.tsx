import React, { SetStateAction, useState, useContext } from 'react';
import { IoMdClose } from 'react-icons/io';
import { AiOutlinePlus } from 'react-icons/ai';
import { AuthAdminContext } from '../../../contexts/AuthAdminContext';
import { newCompany } from '../../../hooks/useApi';
import ButtonSecondary from '../../buttons/ButtonSecondary';
import {Container, Header, CloseBtn, PreviewScreen, TextFooter, Footer, ButtonConfirm, ButtonBack, InfosWrapper, Info, Title, Paragraph, TextCenter } from './style'
import ExceptionMessage from '../../ExceptionMessage';
import ShortInput from '../../inputs/ShortInput';
import Input from '../../inputs/Input';
import { newDocumentType } from '../../../hooks/useApiDocuments';
import ButtonPrimary from '../../buttons/ButtonPrimary';
import { PreviewInterface } from '../../../routes/DocumentModels';
import {
  Document,
  Image,
  Note,
  Page,
  StyleSheet,
  Text,
  View
} from "@react-pdf/renderer";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";


interface ModalInterface {
    toggleModal: () => void;
    toggleModalNew: () => void;
    showModal: boolean; 
    text: string;
    preview: PreviewInterface;
}

const ModalPreviewDocumentModel = ({ toggleModal, preview, showModal, text, toggleModalNew }: ModalInterface): JSX.Element => {

    console.log(preview)
    let texto = "Maria Dora Carla Amanda Emiliana"
    let letra = texto.split(" ");
    // alert(texto);
    return(
        <>
            {
                preview 
                ?
                    (
                        <Container showModal={ showModal }>
                            <Header> {text}
                            <CloseBtn onClick={() => {
                                toggleModal()
                            }}> <IoMdClose /> </CloseBtn>
                            </Header>
                            <PreviewScreen>
                                <InfosWrapper>
                                    <Document>
                                        <Page size="A4" wrap>
                                            <View>
                                                <Text>
                                                    <Title>{preview.title}</Title>
                                                </Text>
                                                <Text>    
                                                    {preview.contentModel.map(model => {
                                                        return model.content.split("\n").map(paragraph => {
                                                            return (
                                                                <Paragraph align = {preview.contentModel[0].position}>
                                                                    {paragraph}
                                                                </Paragraph>
                                                            )
                                                        })
                                                    })}                                        
                                                </Text>
                                            </View>
                                        </Page>
                                    </Document>
                                </InfosWrapper>
                            </PreviewScreen>
                            <Footer>
                                <ButtonBack onClick={() => {
                                    toggleModal();
                                    toggleModalNew();
                                }}> Voltar </ButtonBack>
                                <ButtonConfirm onClick={() => {
                                    alert("Cadastrando novo modelo de documento")
                                    window.location.reload();
                            }}> Cadastrar </ButtonConfirm>
                            </Footer>
                        </Container>
                    )
                :
                null
            }

        </>
    )
};

export default ModalPreviewDocumentModel;