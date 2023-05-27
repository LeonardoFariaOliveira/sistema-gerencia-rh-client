import { SetStateAction, useState, useContext } from 'react';
import { IoMdClose } from 'react-icons/io';
import { AiOutlinePlus } from 'react-icons/ai';
import { AuthAdminContext } from '../../../contexts/AuthAdminContext';
import { newCompany } from '../../../hooks/useApi';
import ButtonSecondary from '../../buttons/ButtonSecondary';
import {Container, Header, OptionsWrapper, CloseBtn, ShortInputsDiv, Spacement, InfoWrapper, IconAdd, TagInput, NewField, SelectStyled, OptionStyled, Field } from './style'
import ExceptionMessage from '../../ExceptionMessage';
import ShortInput from '../../inputs/ShortInput';
import Input from '../../inputs/Input';
import { newDocumentType } from '../../../hooks/useApiDocuments';

interface ModalInterface {
    toggleModal: () => void;
    toggleModalPreview: () => void;
    showModal: boolean; 
    title: string;
    inputs?: string[] | null;
}

interface fieldInterface {
    field: string;
    value: string
}

const ModalNewDocumentModel = ({ toggleModal, showModal, title, toggleModalPreview, inputs }: ModalInterface): JSX.Element => {

    const [name, setName] = useState<string>("");
    const [texts, setTexts] = useState<string[]>([]);
    const [fields, setFields] = useState<string[]>([""]);
    const [tagValue, setTagValue] = useState<string[]>([""]);

    const addField = (e: any, field: string[]) => {
        e.preventDefault();
        setFields([...field, ""])
    }

    const saveText = (index: number, newText: string) => {
        texts[index] = newText;
        setTexts([...texts]);
    }

    const saveField = (index: number, newField: string) => {
        fields[index] = newField;
        setFields([...fields]);
    }

    const saveTagValue = (index: number, value: string) => {
        tagValue[index] = value;
        setTagValue([...tagValue])
    }


    return(
        <>
            <Container showModal={ showModal }>
                <Header> {title}
                <CloseBtn onClick={() => {
                    toggleModal();
                    window.location.reload();
                }}> <IoMdClose /> </CloseBtn>
                </Header>

                <OptionsWrapper>
                    <ShortInputsDiv style={{ flexDirection:'column', alignItems:'flex-start' }}>
                        <ShortInput title={'Nome do modelo'}> <Input onChange={(e: { target: { value: SetStateAction<string>; }; }) => setName(e.target.value.toString())} /> </ShortInput>
                        {
                            inputs && inputs.map((item, index) => (
                                <ShortInput key={index} title={item}> <Input onChange={(e: { target: { value: SetStateAction<string>; }; }) => saveText(index, e.target.value.toString())} /> </ShortInput>
                                ))
                            }
                    </ShortInputsDiv>
                    <TagInput>

                        {
                            fields.map((field, index) => (
                            <Field key={index}>
                                <p> {`Campo ${index + 1}`} </p>
                            <ShortInputsDiv>
                                        <ShortInput title={'Tag'}> <Input key={index} onChange={(e: { target: { value: SetStateAction<string>; }; }) => saveField(index, e.target.value.toString())} /> </ShortInput>
                                
                                <SelectStyled key={index} name='tagValue' onChange={(tag) => {
                                    saveTagValue(index, tag.target.value.toString())
                                    console.log(tagValue)
                                }}>
                                    <OptionStyled value={""} > Selecione </OptionStyled>
                                    <OptionStyled value={"name"}> Nome </OptionStyled>
                                    <OptionStyled value={"CPF"}> CPF </OptionStyled>
                                    <OptionStyled value={"CTPS"}> CTPS </OptionStyled>
                                    <OptionStyled value={"job"}> Função </OptionStyled>
                                    <OptionStyled value={"sector"}> Setor </OptionStyled>
                                    <OptionStyled value={"salary"}> Salário </OptionStyled>
                                    <OptionStyled value={"admissionDate"}> Data de admissão </OptionStyled>
                                    <OptionStyled value={"birthDate"}> Data de Nascimento </OptionStyled>
                                    <OptionStyled value={"company"}> Empresa </OptionStyled>
                                    <OptionStyled value={"adress"}> Endereço </OptionStyled>
                                </SelectStyled>
                                <NewField onClick={(e) => {
                                    addField(e, fields);
                                    console.log(fields)
                                }}> <AiOutlinePlus /> </NewField>
                            </ShortInputsDiv>
                        </Field>
                        ))
                        }

                    </TagInput>
                    <Spacement />
                    <ButtonSecondary onClick={(e) => {
                        e.preventDefault();
                        toggleModal();
                        toggleModalPreview();
                    }}> Preview </ButtonSecondary>
                </OptionsWrapper>
            </Container>
        </>
    )
};

export default ModalNewDocumentModel;