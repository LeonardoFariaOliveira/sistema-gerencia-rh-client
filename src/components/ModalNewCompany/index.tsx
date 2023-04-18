import { SetStateAction, useState, useContext } from 'react';
import { IoMdClose } from 'react-icons/io';
import { AuthAdminContext } from '../../contexts/AuthAdminContext';
import { newCompany } from '../../hooks/useApi';
import ButtonSecondary from '../buttons/ButtonSecondary';
import {Container, Header, OptionsWrapper, CloseBtn, ShortInputsDiv, Spacement } from './style'
import ExceptionMessage from '../ExceptionMessage';
import ShortInput from '../inputs/ShortInput';
import Input from '../inputs/Input';

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
    const [hasError, setHasError] = useState(false);
    const [statusErrorProps, setStatusErrorProps] = useState("");
    const [messageErrorProps, setMessageErrorProps] = useState("");
    const [cep, setCep] = useState<string>('')

    const admContext = useContext(AuthAdminContext)

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
            await newCompany(admContext.token ?? localStorage.getItem("token"), email, password, corporateName, popularName, cnpj, phoneNumber, country, countryArea, city, neighboor, street, number)
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
                <Header> Cadastre uma Empresa
                <CloseBtn onClick={toggleModal}> <IoMdClose /> </CloseBtn>
                </Header>

                <OptionsWrapper>
                    <ShortInputsDiv>
                        <ShortInput title='Razão Social'> <Input onChange={(e: { target: { value: SetStateAction<string>; }; }) => setCorporateName(e.target.value)} /> </ShortInput>
                        <ShortInput title='Nome Popular'> <Input onChange={(e: { target: { value: SetStateAction<string>; }; }) => setPopularName(e.target.value)} /> </ShortInput>
                        <ShortInput title="CNPJ"> <Input mask='cnpj' onBlur={(e: { target: { value: SetStateAction<string>; }; }) => setCnpj(e.target.value)} /> </ShortInput>
                    </ShortInputsDiv>
                    <ShortInput title='E-mail'> <Input onChange={(e: { target: { value: SetStateAction<string>; }; }) => setEmail(e.target.value)} /> </ShortInput>
                    <ShortInputsDiv>
                    <ShortInput title='Senha'> <Input type="password" onChange={(e: { target: { value: SetStateAction<string>; }; }) => setPassword(e.target.value)} /> </ShortInput>
                    <ShortInput title='Confirma a Senha'> <Input type="password" onChange={(e: { target: { value: SetStateAction<string>; }; }) => setSecondPassword(e.target.value)} /> </ShortInput>
                    <ShortInput title='Número para Contato'> <Input onChange={(e: { target: { value: SetStateAction<string>; }; }) => setPhoneNumber(e.target.value)} /> </ShortInput>
                    <ShortInput title='País'> <Input onChange={(e: { target: { value: SetStateAction<string>; }; }) => setCountry(e.target.value)} /> </ShortInput>
                    <ShortInput title="CEP"> <Input mask="cep" onChange={(e: { target: { value: SetStateAction<string>; }; }) => setCep(e.target.value)} onBlur={(e) => checkCep(e)}/> </ShortInput>
                    <ShortInput title='Estado'> <Input value={countryArea} onChange={(e: { target: { value: SetStateAction<string>; }; }) => setCountryArea(e.target.value)} /> </ShortInput>
                    <ShortInput title='Cidade'> <Input value={city} onChange={(e: { target: { value: SetStateAction<string>; }; }) => setCity(e.target.value)} /> </ShortInput>
                    <ShortInput title='Bairro'> <Input value={neighboor} onChange={(e: { target: { value: SetStateAction<string>; }; }) => setNeighboor(e.target.value)} /> </ShortInput>
                    <ShortInput title='Rua'> <Input value={street} onChange={(e: { target: { value: SetStateAction<string>; }; }) => setStreet(e.target.value)} /> </ShortInput>
                    <ShortInput title='Nº do Endereço'> <Input onChange={(e: { target: { value: SetStateAction<string>; }; }) => setNumber(e.target.value)} /> </ShortInput>
                    </ShortInputsDiv>
                    <Spacement />
                    <ButtonSecondary onClick={(e) => {
                        e.preventDefault();
                        handleSubmit()    
                    }}> Cadastrar </ButtonSecondary>
                </OptionsWrapper>
            </Container>
        </>
    )
};

export default ModalNewCompany;