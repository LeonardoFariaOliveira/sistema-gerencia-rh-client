import { Container } from '../LoginAdm/style'
import { PassChangeInput } from './style'

const PassChange = ():JSX.Element => {

    function trocarSenha () {
        console.log('trocando a senha')
    }

    return(
        <Container>
            <PassChangeInput title='Solicite a troca de senha' action={trocarSenha} adm={true} passInput={false} passRecovery={false}  />
        </Container>
    )
};

export default PassChange;