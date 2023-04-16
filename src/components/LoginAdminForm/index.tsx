import { SetStateAction, useContext, useState } from 'react';
import ButtonPrimary from '../buttons/ButtonPrimary';
import { LoginForm, Title, InputStyled } from './style';
import { AuthAdminContext } from '../../contexts/AuthAdminContext';
import ExceptionMessage from '../ExceptionMessage';

const LoginAdminForm = (): JSX.Element => {

    const adminContext = useContext(AuthAdminContext)

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [hasError, setHasError] = useState(false);
    const [statusErrorProps, setStatusErrorProps] = useState("");
    const [messageErrorProps, setMessageErrorProps] = useState("");


    const handleSubmit = async() => {

        try{
            await adminContext.login(user, password)
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
            <Title onClick={() => console.log('login')}> Login </Title>
            <InputStyled 
            type="text"
            value={ user }
            onChange = {(e: { target: { value: SetStateAction<string>; }; }) => setUser(e.target.value)}
            placeholder = "Acesso"
            />
            
            <InputStyled 
            type="password"
            value={ password }
            onChange = {(e: { target: { value: SetStateAction<string>; }; }) => setPassword(e.target.value)}
            placeholder = "Senha"
            /> 

            <ButtonPrimary action={() =>  handleSubmit()}>Acessar</ButtonPrimary>
        </LoginForm>
    )
};

export default LoginAdminForm;