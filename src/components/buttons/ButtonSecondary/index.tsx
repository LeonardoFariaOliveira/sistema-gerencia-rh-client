import { Container, Icon } from './style'
import { MdKeyboardArrowRight } from 'react-icons/md'

interface ButtonProps {
    children: string;
}

const ButtonSecondary = ({ children }: ButtonProps): JSX.Element => {
    return (
      <Container>
        { children }
        <Icon> <MdKeyboardArrowRight /> </Icon>
      </Container>
    )
}

export default ButtonSecondary