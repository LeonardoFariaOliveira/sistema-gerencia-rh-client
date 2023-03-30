import Login from '../../components/Login'
import { Container } from './style'

const LoginUser = (): JSX.Element => {

    const logarUser = () => {
        console.log('logando usuário')
    }

    return(
        <Container>
            <Login title='Login' action={logarUser} adm={ false } passInput={true} passRecovery={true} />
        </Container>
    )
};

export default LoginUser;