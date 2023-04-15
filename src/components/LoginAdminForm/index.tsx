import { SetStateAction, useContext, useState } from 'react';
import ButtonPrimary from '../buttons/ButtonPrimary';
import { LoginForm, Title, InputStyled } from './style';
import { AuthAdminContext } from '../../contexts/AuthAdminContext';

const LoginAdminForm = (): JSX.Element => {

    const adminContext = useContext(AuthAdminContext)

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    return(      
        <LoginForm>
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

            <ButtonPrimary 
                
                onClick={(e) => {
                e.preventDefault();
                adminContext.login(user, password)
                }}

                onKeyPress={(e) => {
                e.preventDefault();
                if(e.key==='Enter'){ adminContext.login(user, password) }
                }}
                
                > Acessar </ButtonPrimary>
        </LoginForm>
    )
};

export default LoginAdminForm;