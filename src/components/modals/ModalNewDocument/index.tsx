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
    showModal: boolean; 
    info?: any;
    text: string;
}

const ModalNewDocument = ({ toggleModal, showModal, info, text }: ModalInterface): JSX.Element => {

    const [type, setType] = useState<string>('');
    const [infos, setInfos] = useState<string[]>([""]);

    const admContext = useContext(AuthAdminContext)

    const addInfo = (e: any) => {
        e.preventDefault();
        setInfos([...infos, ""])
    }

    const saveInfos = (e: string, index: number) => {
        infos[index] = e;
        setInfos([...infos])
    }

    return(
        <>
            <Container showModal={ showModal }>
                <Header> {text}
                <CloseBtn onClick={toggleModal}> <IoMdClose /> </CloseBtn>
                </Header>

                <OptionsWrapper>
                    <ShortInputsDiv style={{ flexDirection:'column', alignItems:'flex-start' }}>
                        <ShortInput title='Tipo de Documento'> <Input onChange={(e: { target: { value: SetStateAction<string>; }; }) => setType(e.target.value.toString())} /> </ShortInput>

                        {
                            infos.map((info: any, index: any) => (
                            <InfoWrapper key={index}>
                                <ShortInput title={`Info ${index + 1}`}> <Input onChange={(e: { target: { value: SetStateAction<string>; }; }) => saveInfos(e.target.value.toString(), index)} /> </ShortInput>
                                <IconAdd onClick={(e) => addInfo(e)}>
                                    <AiOutlinePlus />
                                </IconAdd>
                            </InfoWrapper>
                            ))
                        }
                    </ShortInputsDiv>
                    <Spacement />
                    <ButtonSecondary onClick={(e) => {
                        e.preventDefault();
                        alert('Cadastrando novo tipo de documento');
                        console.log(type)
                        console.log(infos)
                        toggleModal();
                        newDocumentType(type, infos, admContext.token)
                    }}> Cadastrar </ButtonSecondary>
                </OptionsWrapper>
            </Container>
        </>
    )
};

export default ModalNewDocument;