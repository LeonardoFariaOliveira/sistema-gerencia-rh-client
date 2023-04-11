import { SetStateAction, useContext, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { AuthUserContext } from '../../contexts/AuthUserContext';
import { newEmployee } from '../../hooks/useApi';
import ButtonSecondary from '../buttons/ButtonSecondary';
import InputLarge from '../inputs/InputLarge';
import InputShort from '../inputs/IntuprShort';
import {Container, Header, OptionsWrapper, CloseBtn, ShortInputsDiv, Spacement } from './style'

interface ModalInterface {
    toggleModal: () => void;
    showModal: boolean; 
}

const ModalNewEmployee = ({ toggleModal, showModal }: ModalInterface): JSX.Element => {

    const [name, setName] = useState('')
    const [cpf, setCpf] = useState('')
    const [ctps, setCtps] = useState('')
    const [job, setJob] = useState('')
    const [sector, setSector] = useState('')
    const [salary, setSalary] = useState('')
    const [admissionDate, setAdmissionDate] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [country, setCountry] = useState('')
    const [countryArea, setCountryArea] = useState('')
    const [city, setCity] = useState('')
    const [neighboor, setNeighboor] = useState('')
    const [street, setStreet] = useState('')
    const [number, setNumber] = useState('')

    const userContext = useContext(AuthUserContext)


    return(
        <Container showModal={ showModal }>
            <Header> Cadastre um funcionário
            <CloseBtn onClick={toggleModal}> <IoMdClose /> </CloseBtn>
            </Header>

            <OptionsWrapper>

                <InputLarge type = {"text"}  action = {(e: { target: { value: SetStateAction<string>; }; }) => setName(e.target.value)}> Nome Completo </InputLarge>
                <ShortInputsDiv>
                    <InputShort type ={ "text" } action = {(e: { target: { value: SetStateAction<string>; }; }) => setCpf(e.target.value)}> CPF </InputShort>
                    <InputShort type ={ "text" } action = {(e: { target: { value: SetStateAction<string>; }; }) => setCtps(e.target.value)}> CTPS </InputShort>
                    <InputShort type ={ "text" } action = {(e: { target: { value: SetStateAction<string>; }; }) => setAdmissionDate(e.target.value)}> Data de Admissão </InputShort>
                    <InputShort type ={ "text" } action = {(e: { target: { value: SetStateAction<string>; }; }) => setBirthDate(e.target.value)}> Data de Nascimento </InputShort>
                </ShortInputsDiv>
                <InputLarge type = {"text"}  action = {(e: { target: { value: SetStateAction<string>; }; }) => setJob(e.target.value)}> Função </InputLarge>
                <InputLarge type = {"text"} action = {(e: { target: { value: SetStateAction<string>; }; }) => setSector(e.target.value)}> Setor </InputLarge>
                <InputLarge type = {"text"} action = {(e: { target: { value: SetStateAction<string>; }; }) => setSalary(e.target.value)}> Salário </InputLarge>
                <ShortInputsDiv>
                    <InputShort type ={ "text" }  action = {(e: { target: { value: SetStateAction<string>; }; }) => setCountry(e.target.value)}> País </InputShort>
                    <InputShort type ={ "text" }  action = {(e: { target: { value: SetStateAction<string>; }; }) => setCountryArea(e.target.value)}> Estado </InputShort>
                    <InputShort type ={ "text" }  action = {(e: { target: { value: SetStateAction<string>; }; }) => setCity(e.target.value)}> Cidade </InputShort>
                    <InputShort type ={ "text" }  action = {(e: { target: { value: SetStateAction<string>; }; }) => setNeighboor(e.target.value)}> Bairro </InputShort>
                    <InputShort type ={ "text" }  action = {(e: { target: { value: SetStateAction<string>; }; }) => setStreet(e.target.value)}> Rua </InputShort>
                    <InputShort type ={ "text" }  action = {(e: { target: { value: SetStateAction<string>; }; }) => setNumber(e.target.value)}> Número </InputShort>
                </ShortInputsDiv>
                <Spacement />
                <ButtonSecondary action={() => {
                    toggleModal()
                    newEmployee(userContext.tokenUser, name, cpf, ctps, job, sector, salary, admissionDate, birthDate, country, countryArea, city, neighboor, street, number)
                
                }}> Cadastrar </ButtonSecondary>
            </OptionsWrapper>
        </Container>
    )
};

export default ModalNewEmployee;