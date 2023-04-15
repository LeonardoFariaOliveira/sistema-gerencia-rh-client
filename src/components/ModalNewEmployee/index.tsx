import { SetStateAction, useContext, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { AuthUserContext } from '../../contexts/AuthUserContext';
import { newEmployee } from '../../hooks/useApi';
import ButtonSecondary from '../buttons/ButtonSecondary';
import {Container, Header, OptionsWrapper, CloseBtn, ShortInputsDiv, Spacement } from './style'
import ShortInput from '../inputs/ShortInput';
import Input from '../inputs/Input';
import LargeInput from '../inputs/LargeInput';

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
                <LargeInput title="Nome Completo"> <Input onChange={(e: { target: { value: SetStateAction<string>; }; }) => setName(e.target.value)} /> </LargeInput>
                <LargeInput title="Setor"> <Input onChange={(e: { target: { value: SetStateAction<string>; }; }) => setSector(e.target.value)} /> </LargeInput>
                <LargeInput title="Cargo"> <Input onChange={(e: { target: { value: SetStateAction<string>; }; }) => setJob(e.target.value)} /> </LargeInput>
                <ShortInputsDiv>
                    <ShortInput title="CPF"> <Input mask='cpf' onChange={(e: { target: { value: SetStateAction<string>; }; }) => setCpf(e.target.value)} /> </ShortInput>
                    <ShortInput title="CTPS"> <Input onChange={(e: { target: { value: SetStateAction<string>; }; }) => setCtps(e.target.value)} mask={undefined} /> </ShortInput>
                    <ShortInput title="Data de Admissão"> <Input mask="date" onChange={(e: { target: { value: SetStateAction<string>; }; }) => setAdmissionDate(e.target.value)} /> </ShortInput>
                    <ShortInput title="Data de Nascimento"> <Input mask="date" onChange={(e: { target: { value: SetStateAction<string>; }; }) => setBirthDate(e.target.value)} /> </ShortInput>
                    <ShortInput title="Salário"> <Input onChange={(e: { target: { value: SetStateAction<string>; }; }) => setSalary(e.target.value)} /> </ShortInput>
                    <ShortInput title='País'> <Input onChange={(e: { target: { value: SetStateAction<string>; }; }) => setCountry(e.target.value)} /> </ShortInput>
                    <ShortInput title='Estado'> <Input onChange={(e: { target: { value: SetStateAction<string>; }; }) => setCountryArea(e.target.value)} /> </ShortInput>
                    <ShortInput title='Cidade'> <Input onChange={(e: { target: { value: SetStateAction<string>; }; }) => setCity(e.target.value)} /> </ShortInput>
                    <ShortInput title='Bairro'> <Input onChange={(e: { target: { value: SetStateAction<string>; }; }) => setNeighboor(e.target.value)} /> </ShortInput>
                    <ShortInput title='Rua'> <Input onChange={(e: { target: { value: SetStateAction<string>; }; }) => setStreet(e.target.value)} /> </ShortInput>
                    <ShortInput title='Número'> <Input onChange={(e: { target: { value: SetStateAction<string>; }; }) => setNumber(e.target.value)} /> </ShortInput>
                </ShortInputsDiv>
                <Spacement />
                <ButtonSecondary action={() => newEmployee(userContext.tokenUser, name, cpf, ctps, job, sector, salary, admissionDate, birthDate, country, countryArea, city, neighboor, street, number)
                }> Cadastrar </ButtonSecondary>
            </OptionsWrapper>
        </Container>
    )
};

export default ModalNewEmployee;