import { SetStateAction, useState, useContext } from 'react';
import { AuthUserContext } from '../../contexts/AuthUserContext';
import ButtonPrimary from '../buttons/ButtonPrimary';
import { LoginForm, Title, InputStyled, PassRecoveryStyled } from './style';
import ExceptionMessage from '../ExceptionMessage';


export interface ErrorsProps{
    status:string
    message:string
}

const LoginUserForm = (): JSX.Element => {

    const userContext = useContext(AuthUserContext)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [hasError, setHasError] = useState(false);
    const [statusErrorProps, setStatusErrorProps] = useState("");
    const [messageErrorProps, setMessageErrorProps] = useState("");

    const handleSubmit = async() => {
        try{
            await userContext.loginUser(email, password)
        }catch(e:any){
            console.log(e)
            setStatusErrorProps(e.response.data.statusCode)
            setMessageErrorProps(
                e.response.data.statusCode === 403
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
        <LoginForm>
            {
                hasError ?
            (<ExceptionMessage status={statusErrorProps} message={messageErrorProps}/>)
                :
                null
            }
            <Title> Login </Title>
            <InputStyled 
            type="text"
            value={ email }
            onChange = {(e: { target: { value: SetStateAction<string>; }; }) => setEmail(e.target.value)}
            placeholder ='E-mail'
            />
            
            <InputStyled 
            type="password"
            value={ password }
            onChange = {(e: { target: { value: SetStateAction<string>; }; }) => setPassword(e.target.value)}
            placeholder = "Senha"
            /> 

            <ButtonPrimary action={() => handleSubmit()}> Enviar </ButtonPrimary>
            <PassRecoveryStyled> Esqueceu a senha? </PassRecoveryStyled>
        </LoginForm>
    )
};

export default LoginUserForm;