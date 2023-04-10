import { Container, Icon } from './style'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { MouseEventHandler } from 'react';

const ButtonSecondary = ({ action, children }: { action: MouseEventHandler<HTMLDivElement>, children: string }): JSX.Element => {
    return (
      <Container onClick={action}>
        { children }
        <Icon> <MdKeyboardArrowRight /> </Icon>
      </Container>
    )
}

export default ButtonSecondary