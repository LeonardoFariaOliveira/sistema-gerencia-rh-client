import { SetStateAction, useContext, useEffect, useState } from "react";
import LoginUser from "../LoginUser";
import { AuthUserContext } from "../../contexts/AuthUserContext";
import MenuUser from "../../components/MenuUser";
import Header from "../../components/Header";
import InputShort from "../../components/inputs/IntuprShort";
import ShortInput from "../../components/inputs/ShortInput";
import Input from "../../components/inputs/Input";
import BaseScreen from "../../components/BaseScreen";
import { EditForm, FormDiv, InputWrapper, UserImage, ButtonSecondaryStyled, Block, UserImageArea } from "./style"
import { HiOutlineUserCircle } from 'react-icons/hi'
import ButtonSecondary from "../../components/buttons/ButtonSecondary";
import { updateCompany, getCompany } from "../../hooks/useApi";
import ExceptionMessage from "../../components/ExceptionMessage";


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

    const [corporateName, setCorporateName] = useState<string | null>(null)
    const [popularName, setPopularName] = useState<string | null>(null)
    const [cnpj, setCnpj] = useState<string | null>(null)
    const [email, setEmail] = useState<string | null>(null)
    const [password, setPassword] = useState<string | null>(null)
    const [secondPassword, setSecondPassword] = useState<string | null>(null)
    const [phoneNumber, setPhoneNumber] = useState<string | null>(null)
    const [country, setCountry] = useState<string | null>(null)
    const [countryArea, setCountryArea] = useState<string | null>(null)
    const [city, setCity] = useState<string | null>(null)
    const [neighboor, setNeighboor] = useState<string | null>(null)
    const [street, setStreet] = useState<string | null>(null)
    const [number, setNumber] = useState<string | null>(null)
    const [hasError, setHasError] = useState(false);
    const [statusErrorProps, setStatusErrorProps] = useState("");
    const [messageErrorProps, setMessageErrorProps] = useState("");
    const [cep, setCep] = useState<string>('')
    
    const userContext = useContext(AuthUserContext)
    const id = userContext.idUser ?? localStorage.getItem("id")
    const [company, setCompany] = useState<CompanyInfo | null>(null);

    // const response = useGetCompany(id);

    const [block, setBlock] = useState<boolean>(true)
    console.log(block)
    const toggleBlock = () => {
        
        setBlock(!block)
    }

    useEffect(() => {
        getCompany(id).then(resolve => {
            console.log(resolve)
            if(resolve.status === 401)
                localStorage.clear()
            console.log(resolve.data.data)
            return resolve.data
        }).then(data => {
            setCompany(data.data)
            localStorage.setItem("name", data.data.popularName)
        })

        

        // console.log(company)

    }, [block]);

    // const checkCep = (e: React.FormEvent<HTMLInputElement>) => {
    //     let cep = e.currentTarget.value;
    //     cep = cep.replace(/\D/g, "")
    //     if(cep){
    //         fetch (`https://viacep.com.br/ws/${cep}/json/`)
    //         .then(response => response.json())
    //         .then (data => {
    //             setNeighboor(data.bairro)
    //             setCountryArea(data.uf)
    //             setCity(data.localidade)
    //             setStreet(data.logradouro)
    //         })
    //     }
    // }

    const handleSubmit = async() => {
        try{
            await updateCompany(
                id, 
                userContext.tokenUser ?? localStorage.getItem("tokenUser"), 
                email ?? company!.email, 
                password ?? company!.password, 
                corporateName ?? company!.corporateName, 
                popularName ?? company!.popularName, 
                cnpj ?? company!.cnpj, 
                phoneNumber ?? company!.phoneNumber, 
                country ?? company!.address.country, 
                countryArea ?? company!.address.countryArea, 
                city ?? company!.address.city, 
                neighboor ?? company!.address.neighboor, 
                street ?? company!.address.street, 
                number ?? company!.address.number
            )
            toggleBlock();
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

    if(userContext.tokenUser || localStorage.getItem("tokenUser")){
        
        return(
            <>
                {
                hasError ?
                    (<ExceptionMessage status={statusErrorProps} message={messageErrorProps}/>)
                :
                    null
                }
                <Header name={localStorage.getItem("name")!}/>
                <MenuUser />
                <BaseScreen >
                    <EditForm>
                        <FormDiv> 
                            <Block block={block}>
                                <UserImageArea> 
                                    <UserImage>
                                        <HiOutlineUserCircle />
                                    </UserImage>
                                </UserImageArea>
                                <InputWrapper>                   
                                    <ShortInput title="Razão Social"> 
                                        <Input 
                                        onChange={(e: { target: { value: SetStateAction<string | null>; }; }) => setCorporateName(e.target.value)}  
                                        block = {block} 
                                        defaultValue={company?.corporateName} 
                                        /> 
                                    </ShortInput>
                                    <ShortInput title="Nome Fantasia"> 
                                        <Input 
                                        onChange={(e) => setPopularName(e.target.value)}
                                        block = {block}  
                                        defaultValue={company?.popularName} 
                                        /> 
                                    </ShortInput>
                                </InputWrapper>    
                                <ShortInput title="CNPJ"> 
                                    <Input 
                                    mask='cnpj' 
                                    onBlur={(e: { target: { value: SetStateAction<string| null>; }; }) => setCnpj(e.target.value)}
                                    block = {block} 
                                    defaultValue={company?.cnpj}
                                    /> 
                                </ShortInput>
                                <ShortInput title="E-mail"> 
                                    <Input 
                                    onChange={(e: { target: { value: SetStateAction<string| null>; }; }) => setEmail(e.target.value)}
                                    block = {block} 
                                    defaultValue={company?.email} 
                                    /> 
                                </ShortInput>
                                <InputWrapper>    
                                    <ShortInput title="Senha"> 
                                        <Input 
                                        onChange={(e: { target: { value: SetStateAction<string| null>; }; }) => setPassword(e.target.value)}
                                        block = {block} 
                                        type="password"  
                                        defaultValue={company?.password} 
                                        /> 
                                    </ShortInput>
                                    <ShortInput title="Confirmar senha"> 
                                        <Input 
                                        onChange={(e: { target: { value: SetStateAction<string| null>; }; }) => setSecondPassword(e.target.value)}
                                        block = {block} 
                                        type="password" 
                                        defaultValue={company?.password}
                                        /> 
                                    </ShortInput>
                                </InputWrapper>    
                                <ShortInput title="Telefone"> 
                                    <Input 
                                    onChange={(e: { target: { value: SetStateAction<string| null>; }; }) => setPhoneNumber(e.target.value)}
                                    block = {block} 
                                    defaultValue={company?.phoneNumber} 
                                    /> 
                                </ShortInput>
                                {/* <ShortInput title="CEP"> 
                                    <Input 
                                    block = {block} 
                                    mask="cep" 
                                    onChange={(e: { target: { value: SetStateAction<string>; }; }) => setCep(e.target.value)} 
                                    onBlur={(e) => checkCep(e)}
                                    /> 
                                </ShortInput> */}
                                <InputWrapper> 
                                    <ShortInput title='País'> 
                                        <Input 
                                        block = {block} 
                                        defaultValue={company?.address.country} 
                                        onChange={(e: { target: { value: SetStateAction<string| null>; }; }) => setCountry(e.target.value)} 
                                        /> 
                                    </ShortInput>
                                    <ShortInput title='Estado'> 
                                        <Input 
                                        block = {block} 
                                        defaultValue={company?.address.countryArea} 
                                        onChange={(e: { target: { value: SetStateAction<string| null>; }; }) => setCountryArea(e.target.value)} 
                                        /> 
                                    </ShortInput>
                                </InputWrapper> 
                                <InputWrapper> 
                                    <ShortInput title='Cidade'> 
                                        <Input 
                                        block = {block} 
                                        defaultValue={company?.address.city}  
                                        onChange={(e: { target: { value: SetStateAction<string| null>; }; }) => setCity(e.target.value)} 
                                        /> 
                                    </ShortInput>
                                    <ShortInput title='Bairro'> 
                                        <Input 
                                        block = {block} 
                                        defaultValue={company?.address.neighboor} 
                                        onChange={(e: { target: { value: SetStateAction<string| null>; }; }) => setNeighboor(e.target.value)} 
                                        /> 
                                    </ShortInput>
                                </InputWrapper> 
                                <InputWrapper> 
                                    <ShortInput title='Rua'> 
                                        <Input 
                                        block = {block} 
                                        defaultValue={company?.address.street}  
                                        onChange={(e: { target: { value: SetStateAction<string| null>; }; }) => setStreet(e.target.value)} 
                                        /> 
                                    </ShortInput>
                                    <ShortInput title='Nº do Endereço'> 
                                        <Input 
                                        block = {block} 
                                        defaultValue={company?.address.number} 
                                        onChange={(e: { target: { value: SetStateAction<string| null>; }; }) => setNumber(e.target.value)} 
                                        /> 
                                    </ShortInput>
                                </InputWrapper> 
                            </Block>

                            {block ? 
                            <ButtonSecondaryStyled onClick={() => toggleBlock()}> Alterar </ButtonSecondaryStyled> 
                            : 
                            <ButtonSecondaryStyled onClick={() => handleSubmit()}> Salvar </ButtonSecondaryStyled>}

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