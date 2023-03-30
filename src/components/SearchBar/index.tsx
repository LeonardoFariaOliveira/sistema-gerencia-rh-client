import { Container, Input, Icon } from './style'
import { HiSearch } from 'react-icons/hi'

const SearchBar = (): JSX.Element => {
    return(
        <Container>
            <Input
            type="text"
            placeholder='Digite aqui o que deseja localizar' 
            />
            <Icon>
                <HiSearch />
            </Icon>
        </Container>
    )
};

export default SearchBar;