import { Container, Title } from './style'

const LargeInput = ({title, children}: {title: string, children: any}):JSX.Element => {
    return(
        <Container>
            <Title> {title} </Title>
            {children}
        </Container>
    )
};
export default LargeInput;
