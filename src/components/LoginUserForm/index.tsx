import { SetStateAction, useState, useContext } from 'react';
import { AuthUserContext } from '../../contexts/AuthUserContext';
import ButtonPrimary from '../buttons/ButtonPrimary';
import { LoginForm, Title, InputStyled, PassRecoveryStyled } from './style';

const LoginUserForm = (): JSX.Element => {

    const userContext = useContext(AuthUserContext)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(      
        <LoginForm>
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

            <ButtonPrimary 
                
                onClick={(e) => {
                e.preventDefault();
                userContext.loginUser(email, password)
                }}

                onKeyPress={(e) => {
                e.preventDefault();
                if(e.key==='Enter'){ userContext.loginUser(email, password) }
                }}
                
                > Enviar </ButtonPrimary>
            <PassRecoveryStyled> Esqueceu a senha? </PassRecoveryStyled>
        </LoginForm>
    )
};

export default LoginUserForm;