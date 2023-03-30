import { IoMdClose } from 'react-icons/io';
import ButtonSecondary from '../buttons/ButtonSecondary';
import InputLarge from '../inputs/InputLarge';
import InputShort from '../inputs/IntuprShort';
import {Container, Header, OptionsWrapper, CloseBtn, ShortInputsDiv, Spacement } from './style'

const Modal = (): JSX.Element => {
    return(
        <Container>
            <Header> Cadastre um funcionário
            <CloseBtn> <IoMdClose /> </CloseBtn>
            </Header>

            <OptionsWrapper>

                <InputLarge> Nome Completo </InputLarge>
                <ShortInputsDiv>
                    <InputShort> CPF </InputShort>
                    <InputShort> CTPS </InputShort>
                    <InputShort> Data de Admissão </InputShort>
                    <InputShort> Data de Nascimento </InputShort>
                </ShortInputsDiv>
                <InputLarge> Função </InputLarge>
                <InputLarge> Setor </InputLarge>
                <InputLarge> Endereço Residencial </InputLarge>
                <Spacement />
                <ButtonSecondary> Cadastrar </ButtonSecondary>
            </OptionsWrapper>
        </Container>
    )
};

export default Modal;