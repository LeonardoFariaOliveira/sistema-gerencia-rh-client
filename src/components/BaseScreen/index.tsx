import { Container } from './style'

const BaseScreen = ({ children }: {children: any}): JSX.Element => { return(
    <Container>
        { children }
    </Container>
)};

export default BaseScreen;