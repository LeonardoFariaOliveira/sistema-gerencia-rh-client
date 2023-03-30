import { IoMdClose } from 'react-icons/io';
import ButtonSecondary from '../buttons/ButtonSecondary';
import InputLarge from '../inputs/InputLarge';
import InputShort from '../inputs/IntuprShort';
import {Container, Header, OptionsWrapper, CloseBtn, ShortInputsDiv, Spacement } from './style'

const ModalNewCompany = (): JSX.Element => {
    return(
        <Container>
            <Header> Cadastre uma Empresa
            <CloseBtn> <IoMdClose /> </CloseBtn>
            </Header>

            <OptionsWrapper>

                <InputLarge> Nome Completo </InputLarge>
                <ShortInputsDiv>
                    <InputShort> Razão Social </InputShort>
                    <InputShort> Nome Fantasia </InputShort>
                    <InputShort> CNPJ </InputShort>
                </ShortInputsDiv>
                <InputShort> E-mail </InputShort>
                <ShortInputsDiv>
                    <InputShort> Senha </InputShort>
                    <InputShort> Confirmar Senha </InputShort>
                </ShortInputsDiv>
                <InputShort> Telefone </InputShort>
                <InputLarge> Endereço </InputLarge>
                <Spacement />
                <ButtonSecondary> Cadastrar </ButtonSecondary>
            </OptionsWrapper>
        </Container>
    )
};

export default ModalNewCompany;