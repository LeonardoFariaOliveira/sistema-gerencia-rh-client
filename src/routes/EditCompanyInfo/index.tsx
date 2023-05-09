import { SetStateAction, useContext, useEffect, useState } from "react";
import LoginUser from "../LoginUser";
import { AuthUserContext } from "../../contexts/AuthUserContext";
import MenuUser from "../../components/MenuUser";
import Header from "../../components/Header";
import InputShort from "../../components/inputs/IntuprShort";
import ShortInput from "../../components/inputs/ShortInput";
import Input from "../../components/inputs/Input";
import BaseScreen from "../../components/BaseScreen";
import { EditForm, FormDiv, InputWrapper, UserImage, ButtonSecondaryStyled, Block } from "./style"
import { HiOutlineUserCircle } from 'react-icons/hi'
import ButtonSecondary from "../../components/buttons/ButtonSecondary";
import { useGetCompany } from "../../hooks/useApi";


export interface CompanyInfo{

    email: string,
    password: string,
    corporateName: string,
    popularName: string,
    cnpj:string,
    phoneNumber:string,
    photoUrl?:string
    address:{
        country:string,
        countryArea:string,
        city: string,
        street: string,
        neighboor: string,
        number:string
    }

}

const EditCompanyInfo = (): JSX.Element => {

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
    
    const userContext = useContext(AuthUserContext)
    const id = userContext.idUser ?? localStorage.getItem("id")
    const [company, setCompany] = useState<CompanyInfo | null>(null);

    const response = useGetCompany(id);

    const [block, setBlock] = useState<boolean>(true)
    const toggleBlock = () => {
        setBlock(!block)
    }

    useEffect(() => {
        response.then(resolve => {
            console.log(resolve)
            if(resolve.status === 401)
                localStorage.clear()
            console.log(resolve.data.data)
            return resolve.data
        }).then(data => setCompany(data.data))

        // console.log(company)

    }, []);

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

    if(userContext.tokenUser || localStorage.getItem("tokenUser")){
        
        return(
            <>
            <Header name={localStorage.name}/>
            <MenuUser />
            <BaseScreen >
                <EditForm>
                    
                    <FormDiv> 
                        <Block block={block}>
                            <UserImage> <HiOutlineUserCircle /> </UserImage>
                            <InputWrapper>                   
                                <ShortInput title="Razão Social"> <Input defaultValue={company?.corporateName} /> </ShortInput>
                                <ShortInput title="Nome Fantasia"> <Input  defaultValue={company?.popularName} /> </ShortInput>
                            </InputWrapper>    
                            <ShortInput title="CNPJ"> <Input defaultValue={company?.cnpj}/> </ShortInput>
                            <ShortInput title="E-mail"> <Input defaultValue={company?.email} /> </ShortInput>
                            <InputWrapper>    
                                <ShortInput title="Senha"> <Input type="password"  defaultValue={company?.password} /> </ShortInput>
                                <ShortInput title="Confirmar senha"> <Input type="password" defaultValue={company?.password}/> </ShortInput>
                            </InputWrapper>    
                            <ShortInput title="Telefone"> <Input defaultValue={company?.phoneNumber} /> </ShortInput>
                            <ShortInput title="CEP"> <Input mask="cep" onChange={(e: { target: { value: SetStateAction<string>; }; }) => setCep(e.target.value)} onBlur={(e) => checkCep(e)}/> </ShortInput>
                            <InputWrapper> 
                                <ShortInput title='País'> <Input defaultValue={company?.address.country} onChange={(e: { target: { value: SetStateAction<string>; }; }) => setCountry(e.target.value)} /> </ShortInput>
                                <ShortInput title='Estado'> <Input defaultValue={company?.address.countryArea} onChange={(e: { target: { value: SetStateAction<string>; }; }) => setCountryArea(e.target.value)} /> </ShortInput>
                            </InputWrapper> 
                            <InputWrapper> 
                                <ShortInput title='Cidade'> <Input defaultValue={company?.address.city}  onChange={(e: { target: { value: SetStateAction<string>; }; }) => setCity(e.target.value)} /> </ShortInput>
                                <ShortInput title='Bairro'> <Input defaultValue={company?.address.neighboor} onChange={(e: { target: { value: SetStateAction<string>; }; }) => setNeighboor(e.target.value)} /> </ShortInput>
                            </InputWrapper> 
                            <InputWrapper> 
                                <ShortInput title='Rua'> <Input defaultValue={company?.address.street}  onChange={(e: { target: { value: SetStateAction<string>; }; }) => setStreet(e.target.value)} /> </ShortInput>
                                <ShortInput title='Nº do Endereço'> <Input defaultValue={company?.address.number} onChange={(e: { target: { value: SetStateAction<string>; }; }) => setNumber(e.target.value)} /> </ShortInput>
                            </InputWrapper> 
                        </Block>

                        {block ? 
                        <ButtonSecondaryStyled onClick={() => toggleBlock()}> Alterar </ButtonSecondaryStyled> 
                        : 
                        <ButtonSecondaryStyled onClick={() => toggleBlock()}> Salvar </ButtonSecondaryStyled>}

                    </FormDiv>
                </EditForm>
            </BaseScreen>
            </>
        )
        
    }
    else{
        return (
            <>
                {
                    
                    localStorage.clear()
                }
                {/* <Navigate to={'/user'}/> */}
                <LoginUser />
            </>
        )
    }
};

export default EditCompanyInfo;