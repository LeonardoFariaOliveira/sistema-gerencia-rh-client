import { SetStateAction, useContext, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { AuthUserContext } from '../../contexts/AuthUserContext';
import { newEmployee } from '../../hooks/useApi';
import ButtonSecondary from '../buttons/ButtonSecondary';
import {Container, Header, OptionsWrapper, CloseBtn, ShortInputsDiv, Spacement } from './style'
import ExceptionMessage from '../ExceptionMessage';
import ShortInput from '../inputs/ShortInput';
import Input from '../inputs/Input';
import LargeInput from '../inputs/LargeInput';
import { useFormAction } from 'react-router-dom';
import { useForm } from 'react-hook-form';

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
    const [hasError, setHasError] = useState(false);
    const [statusErrorProps, setStatusErrorProps] = useState("");
    const [messageErrorProps, setMessageErrorProps] = useState("");
    const [cep, setCep] = useState('')

    const userContext = useContext(AuthUserContext)

    const checkCep = (e: React.FormEvent<HTMLInputElement>) => {
        let cep = e.currentTarget.value;
        cep = cep.replace(/\D/g, "")
        if(cep){
            fetch (`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then (data => {
                setNeighboor(data.bairro)
                setCountryArea(data.uf)
                setCity(data.localidade)
                setStreet(data.logradouro)
            })
        }
    }

    const handleSubmit = async() => {
        try{
            await newEmployee(userContext.tokenUser, name, cpf, ctps, job, sector, salary, admissionDate, birthDate, country, countryArea, city, neighboor, street, userContext.idUser, number)
            toggleModal()  
        }catch(e:any){
            console.log(e)
            setStatusErrorProps(e.response.data.statusCode)
            setMessageErrorProps(
                e.response.data.statusCode === 401
                ?  
                e.response.data.message 
                : 
                e.response.data.message[0]
            )
            setHasError(true)
            setTimeout(() => setHasError(false), 4000)
        }
    }


    return(
        <>
            {
                hasError ?
            (<ExceptionMessage status={statusErrorProps} message={messageErrorProps}/>)
                :
                null
            }
            <Container showModal={ showModal }>
                <Header> Cadastre um funcionário
                <CloseBtn onClick={toggleModal}> <IoMdClose /> </CloseBtn>
                </Header>
                <OptionsWrapper>
                    <LargeInput title="Nome Completo"> <Input onChange={(e: { target: { value: SetStateAction<string>; }; }) => setName(e.target.value)} /> </LargeInput>
                    <LargeInput title="Setor"> <Input onChange={(e: { target: { value: SetStateAction<string>; }; }) => setSector(e.target.value)} /> </LargeInput>
                    <LargeInput title="Cargo"> <Input onChange={(e: { target: { value: SetStateAction<string>; }; }) => setJob(e.target.value)} /> </LargeInput>
                    <LargeInput title="Salário"> <Input onChange={(e: { target: { value: SetStateAction<string>; }; }) => setSalary(e.target.value)} /> </LargeInput>
                    <ShortInputsDiv>
                        <ShortInput title="CPF"> <Input mask='cpf' onBlur={(e: { target: { value: SetStateAction<string>; }; }) => setCpf(e.target.value)} /> </ShortInput>
                        <ShortInput title="CTPS"> <Input onChange={(e: { target: { value: SetStateAction<string>; }; }) => setCtps(e.target.value)} mask={undefined} /> </ShortInput>
                        <ShortInput title="Data de Admissão"> <Input mask="date" onBlur={(e: { target: { value: SetStateAction<string>; }; }) => setAdmissionDate(e.target.value)} /> </ShortInput>
                        <ShortInput title="Data de Nascimento"> <Input mask="date" onBlur={(e: { target: { value: SetStateAction<string>; }; }) => setBirthDate(e.target.value)} /> </ShortInput>
                        <ShortInput title="CEP"> <Input mask="cep" onChange={(e: { target: { value: SetStateAction<string>; }; }) => setCep(e.target.value)} onBlur={(e) => checkCep(e)}/> </ShortInput>
                        <ShortInput title='País'> <Input onChange={(e: { target: { value: SetStateAction<string>; }; }) => setCountry(e.target.value)} /> </ShortInput>
                        <ShortInput title='Estado'> <Input value={countryArea} onChange={(e: { target: { value: SetStateAction<string>; }; }) => setCountryArea(e.target.value)} /> </ShortInput>
                        <ShortInput title='Cidade'> <Input value={city} onChange={(e: { target: { value: SetStateAction<string>; }; }) => setCity(e.target.value)} /> </ShortInput>
                        <ShortInput title='Bairro'> <Input value={neighboor} onChange={(e: { target: { value: SetStateAction<string>; }; }) => setNeighboor(e.target.value)} /> </ShortInput>
                        <ShortInput title='Rua'> <Input value={street} onChange={(e: { target: { value: SetStateAction<string>; }; }) => setStreet(e.target.value)} /> </ShortInput>
                        <ShortInput title='Nº do Endereço'> <Input onChange={(e: { target: { value: SetStateAction<string>; }; }) => setNumber(e.target.value)} /> </ShortInput>
                    </ShortInputsDiv>
                    <Spacement />
                    <ButtonSecondary onClick={(e) => {
                        console.log(birthDate)
                        e.preventDefault();
                        handleSubmit()
                    }}> Cadastrar </ButtonSecondary>
                </OptionsWrapper>
            </Container>
        </>
    )
};

export default ModalNewEmployee;