import Login from '../../components/Login'
import { Container } from './style'

const LoginAdm = (): JSX.Element => {

    function logarAdm () {
        console.log('logando adm')
    }

    return(
        <Container>
            <Login title='Login' action={logarAdm} adm={ true } passInput={true} passRecovery={false} />
        </Container>
    )
};

export default LoginAdm;