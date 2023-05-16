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

interface ModalInterface {
    toggleModal: () => void;
    showModal: boolean; 
    info?: any;
    text: string;
}

const ModalNewDocument = ({ toggleModal, showModal, info, text }: ModalInterface): JSX.Element => {

    const [type, setType] = useState<string>('');
    const [infos, setInfos] = useState<SetStateAction<string>[]>([""]);

    const admContext = useContext(AuthAdminContext)

    const addInfo = (e: any) => {
        e.preventDefault();
        setInfos([...infos, ""])
    }

    const saveInfos = (e: SetStateAction<string>, index: number) => {
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
                        <ShortInput title='Tipo de Documento'> <Input onChange={(e: { target: { value: SetStateAction<string>; }; }) => setType(e.target.value)} /> </ShortInput>

                        {
                            infos.map((info: any, index: any) => (
                            <InfoWrapper key={index}>
                                <ShortInput title={`Info ${index + 1}`}> <Input onChange={(e: { target: { value: SetStateAction<string>; }; }) => saveInfos(e.target.value, index)} /> </ShortInput>
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
                        toggleModal();
                        window.location.reload(); 
                    }}> Cadastrar </ButtonSecondary>
                </OptionsWrapper>
            </Container>
        </>
    )
};

export default ModalNewDocument;