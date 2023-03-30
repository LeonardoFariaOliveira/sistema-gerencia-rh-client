import { SetStateAction, useState } from 'react';
import ButtonPrimary from '../buttons/ButtonPrimary';
import { LoginForm, Title, InputStyled, PassRecoveryStyled } from './style';

interface LoginProps {
    title: string;
    adm: boolean;
    passInput: boolean;
    passRecovery: boolean;
    action: Function;
}

const Login = ({ title, adm, passInput, passRecovery, action }:LoginProps ): JSX.Element => {

    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    return(      
        <LoginForm>
            <Title> { title } </Title>
            <InputStyled 
            type="text"
            value={ user }
            onChange = {(e: { target: { value: SetStateAction<string>; }; }) => setUser(e.target.value)}
            placeholder = { adm ? 'Acesso' : 'E-mail' }
            />
            
            { passInput ?
            <InputStyled 
            type="password"
            value={ pass }
            onChange = {(e: { target: { value: SetStateAction<string>; }; }) => setPass(e.target.value)}
            placeholder = "Senha"
            /> 
            : <div></div> }

            { passInput ? <ButtonPrimary action={action}>Acessar</ButtonPrimary> : <ButtonPrimary action={action}>Enviar</ButtonPrimary> }
            { passRecovery ? <PassRecoveryStyled> Esqueceu a senha? </PassRecoveryStyled> : <div></div>}
        </LoginForm>
    )
};

export default Login;