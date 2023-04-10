import { SetStateAction, useState, useContext } from 'react';
import { IoMdClose } from 'react-icons/io';
import { AuthAdminContext } from '../../contexts/AuthAdminContext';
import { newCompany } from '../../hooks/useApi';
import ButtonSecondary from '../buttons/ButtonSecondary';
import InputLarge from '../inputs/InputLarge';
import InputShort from '../inputs/IntuprShort';
import {Container, Header, OptionsWrapper, CloseBtn, ShortInputsDiv, Spacement } from './style'

interface ModalInterface {
    toggleModal: () => void;
    showModal: boolean; 
}

const ModalNewCompany = ({ toggleModal, showModal }: ModalInterface): JSX.Element => {

    const [corporateName, setCorporateName] = useState<string>('')
    const [popularName, setPopularName] = useState<string>('')
    const [cnpj, setCnpj] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [secondPassword, setSecondPassword] = useState<string>('')
    const [phoneNumber, setPhoneNumber] = useState<string>('')
    const [country, setCountry] = useState<string>('')
    const [countryArea, setCountryArea] = useState<string>('')
    const [city, setCity] = useState<string>('')
    const [neighboor, setNeighboor] = useState<string>('')
    const [street, setStreet] = useState<string>('')
    const [number, setNumber] = useState<string>('')

    const admContext = useContext(AuthAdminContext)

    return(
        <Container showModal={ showModal }>
            <Header> Cadastre uma Empresa
            <CloseBtn onClick={toggleModal}> <IoMdClose /> </CloseBtn>
            </Header>

            <OptionsWrapper>
                <ShortInputsDiv>
                    <InputShort action = {(e: { target: { value: SetStateAction<string>; }; }) => setCorporateName(e.target.value)}> Razão Social </InputShort>
                    <InputShort action = {(e: { target: { value: SetStateAction<string>; }; }) => setPopularName(e.target.value)}> Nome Fantasia </InputShort>
                    <InputShort action = {(e: { target: { value: SetStateAction<string>; }; }) => setCnpj(e.target.value)}> CNPJ </InputShort>
                </ShortInputsDiv>
                <InputShort action = {(e: { target: { value: SetStateAction<string>; }; }) => setEmail(e.target.value)}> E-mail </InputShort>
                <ShortInputsDiv>
                    <InputShort action = {(e: { target: { value: SetStateAction<string>; }; }) => setPassword(e.target.value)}> Senha </InputShort>
                    <InputShort action = {(e: { target: { value: SetStateAction<string>; }; }) => setSecondPassword(e.target.value)}> Confirmar Senha </InputShort>
                <InputShort action = {(e: { target: { value: SetStateAction<string>; }; }) => setPhoneNumber(e.target.value)}> Telefone </InputShort>
                <InputShort action = {(e: { target: { value: SetStateAction<string>; }; }) => setCountry(e.target.value)}> País </InputShort>
                <InputShort action = {(e: { target: { value: SetStateAction<string>; }; }) => setCountryArea(e.target.value)}> Estado </InputShort>
                <InputShort action = {(e: { target: { value: SetStateAction<string>; }; }) => setCity(e.target.value)}> Cidade </InputShort>
                <InputShort action = {(e: { target: { value: SetStateAction<string>; }; }) => setNeighboor(e.target.value)}> Bairro </InputShort>
                <InputShort action = {(e: { target: { value: SetStateAction<string>; }; }) => setStreet(e.target.value)}> Rua </InputShort>
                <InputShort action = {(e: { target: { value: SetStateAction<string>; }; }) => setNumber(e.target.value)}> Número </InputShort>
                </ShortInputsDiv>
                <Spacement />
                <ButtonSecondary action={() => newCompany(admContext.token, email, password, corporateName, popularName, cnpj, phoneNumber, country, countryArea, city, neighboor, street, number,)
                }> Cadastrar </ButtonSecondary>
            </OptionsWrapper>
        </Container>
    )
};

export default ModalNewCompany;