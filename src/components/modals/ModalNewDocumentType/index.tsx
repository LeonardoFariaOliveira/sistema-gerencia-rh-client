import { SetStateAction, useState, useContext } from 'react';
import { IoMdClose } from 'react-icons/io';
import { AiOutlinePlus } from 'react-icons/ai';
import { AuthAdminContext } from '../../../contexts/AuthAdminContext';
import { newCompany } from '../../../hooks/useApi';
import ButtonSecondary from '../../buttons/ButtonSecondary';
import {Container, Header, OptionsWrapper, CloseBtn, ShortInputsDiv, Spacement, InfoWrapper, IconAdd } from './style'
import ExceptionMessage from '../../ExceptionMessage';
import ShortInput from '../../inputs/ShortInput';
import Input from '../../inputs/Input';
import { newDocumentType } from '../../../hooks/useApiDocuments';

interface ModalInterface {
    toggleModal: () => void;
    toggleModalPreview: () => void;
    showModal: boolean; 
    infos: string[];
    text: string;
    type: string;
    setType: (props: string) => void;
    setInfos: (props: string[]) => void;
}

const ModalNewDocument = ({ toggleModal, showModal, infos, text, toggleModalPreview, setInfos, setType, type }: ModalInterface): JSX.Element => {

    const admContext = useContext(AuthAdminContext)

    const addInfo = (e: any, infos: string[]) => {
        e.preventDefault();
        setInfos([...infos, ""])
    }

    const saveInfos = (e: string, index: number, infos: string[]) => {
        infos[index] = e;
        setInfos([...infos])
    }

    return(
        <>
            <Container showModal={ showModal }>
                <Header> {text}
                <CloseBtn onClick={() => {
                    toggleModal();
                    window.location.reload();
                }}> <IoMdClose /> </CloseBtn>
                </Header>

                <OptionsWrapper>
                    <ShortInputsDiv style={{ flexDirection:'column', alignItems:'flex-start' }}>
                        <ShortInput title='Tipo de documento'> <Input onChange={(e: { target: { value: SetStateAction<string>; }; }) => setType(e.target.value.toString())} /> </ShortInput>

                        {
                            infos.map((info: any, index: any) => (
                            <InfoWrapper key={index}>
                                <ShortInput title={`Info ${index + 1}`}> <Input onChange={(e: { target: { value: SetStateAction<string>; }; }) => saveInfos(e.target.value.toString(), index, infos)} /> </ShortInput>
                                <IconAdd onClick={(e) => addInfo(e, infos)}>
                                    <AiOutlinePlus />
                                </IconAdd>
                            </InfoWrapper>
                            ))
                        }
                    </ShortInputsDiv>
                    <Spacement />
                    <ButtonSecondary onClick={(e) => {
                        e.preventDefault();
                        console.log(type)
                        console.log(infos)
                        toggleModal();
                        toggleModalPreview();
                    }}> Preview </ButtonSecondary>
                </OptionsWrapper>
            </Container>
        </>
    )
};

export default ModalNewDocument;