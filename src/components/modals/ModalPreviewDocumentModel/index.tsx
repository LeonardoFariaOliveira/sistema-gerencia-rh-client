import { SetStateAction, useState, useContext } from 'react';
import { IoMdClose } from 'react-icons/io';
import { AiOutlinePlus } from 'react-icons/ai';
import { AuthAdminContext } from '../../../contexts/AuthAdminContext';
import { newCompany } from '../../../hooks/useApi';
import ButtonSecondary from '../../buttons/ButtonSecondary';
import {Container, Header, CloseBtn, PreviewScreen, Footer, ButtonConfirm, ButtonBack, InfosWrapper, Info } from './style'
import ExceptionMessage from '../../ExceptionMessage';
import ShortInput from '../../inputs/ShortInput';
import Input from '../../inputs/Input';
import { newDocumentType } from '../../../hooks/useApiDocuments';
import ButtonPrimary from '../../buttons/ButtonPrimary';

interface ModalInterface {
    toggleModal: () => void;
    toggleModalNew: () => void;
    showModal: boolean; 
    text: string;
}

const ModalPreviewDocumentModel = ({ toggleModal, showModal, text, toggleModalNew }: ModalInterface): JSX.Element => {

    return(
        <>
            <Container showModal={ showModal }>
                <Header> {text}
                <CloseBtn onClick={() => {
                    toggleModal()
                    window.location.reload();
                }}> <IoMdClose /> </CloseBtn>
                </Header>
                <PreviewScreen>
                    <InfosWrapper>
                        
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
        </>
    )
};

export default ModalPreviewDocumentModel;