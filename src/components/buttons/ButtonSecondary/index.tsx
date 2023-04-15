import { Container, Icon } from './style'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { ButtonHTMLAttributes, MouseEventHandler } from 'react';

const ButtonSecondary: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => {
    return (
      <Container {...props}>
        { children }
        <Icon> <MdKeyboardArrowRight /> </Icon>
      </Container>
    )
}

export default ButtonSecondary