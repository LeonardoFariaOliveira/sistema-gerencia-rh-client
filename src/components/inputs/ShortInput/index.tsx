import { Container, Title } from './style'

const ShortInput = ({title, children}: {title: string, children: any}):JSX.Element => {
    return(
        <Container>
            <Title> {title} </Title>
            {children}
        </Container>
    )
};
export default ShortInput;
