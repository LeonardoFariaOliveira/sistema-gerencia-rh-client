import { Container, Name, Logged } from './style'
import userPicture from '../../assets/icon/userPicture.svg'

interface HeaderProps {
    name: string; 
    user: string;
}

const Header = ({ name, user }: HeaderProps): JSX.Element => {
    return(
        <Container>
            <Name> { name } </Name>
            {/* <div>
                <Logged> { user } logado </Logged>
                <img src={ userPicture } alt='user' />
            </div> */}
        </Container>
    )
};

export default Header;