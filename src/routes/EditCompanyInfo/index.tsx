import { useContext, useState } from "react";
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

const EditCompanyInfo = (): JSX.Element => {

    const userContext = useContext(AuthUserContext)

    const [block, setBlock] = useState<boolean>(true)
    const toggleBlock = () => {
        setBlock(!block)
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
                                <ShortInput title="Razão Social"> <Input /> </ShortInput>
                                <ShortInput title="Nome Fantasia"> <Input /> </ShortInput>
                            </InputWrapper>    
                            <ShortInput title="CNPJ"> <Input /> </ShortInput>
                            <ShortInput title="E-mail"> <Input /> </ShortInput>
                            <InputWrapper>    
                                <ShortInput title="Senha"> <Input /> </ShortInput>
                                <ShortInput title="Confirmar senha"> <Input /> </ShortInput>
                            </InputWrapper>    
                            <ShortInput title="Telefone"> <Input /> </ShortInput>
                            <ShortInput title="Endereço"> <Input /> </ShortInput>
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