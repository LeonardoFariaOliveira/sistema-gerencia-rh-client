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
import { documentInterface } from '../../../routes/Documents';
import LargeTextInput from '../../inputs/LargeTextInput';
import LargeInput from '../../inputs/LargeInput';
import { PreviewInterface } from '../../../routes/DocumentModels';

interface ModalInterface {
    toggleModal: () => void;
    toggleModalPreview: () => void;
    setPreview: (preview: PreviewInterface) => void;
    showModal: boolean; 
    title: string;
    type: documentInterface | null;
}

export interface fieldInterface {
    field: string;
    value: string
}

export interface TextModel{
    name: string
    content: string
    position: string
}



const ModalNewDocumentModel = ({ toggleModal, setPreview, showModal, title, toggleModalPreview, type }: ModalInterface): JSX.Element => {

    const [name, setName] = useState<string>("");
    const [texts, setTexts] = useState<string[]>([""]);
    const [pos, setPos] = useState<string[]>(["left"]);
    const [fields, setFields] = useState<string[]>([""]);
    const [tagValue, setTagValue] = useState<string[]>([""]);

    const addField = (e: any, field: string[]) => {
        e.preventDefault();
        setFields([...field, ""])
    }

    const saveText = (index: number, newText: string) => {
        texts[index] = newText
        //.replace(/\n/g, ' <br/> ');
        setTexts([...texts]);
    }

    const savePos = (index: number, newPos: string) => {
        pos[index] = newPos;
        setPos([...pos]);
    }

    const saveField = (index: number, newField: string) => {
        fields[index] = newField;
        setFields([...fields]);
    }

    const saveTagValue = (index: number, value: string) => {
        tagValue[index] = value;
        setTagValue([...tagValue])
    }

    const handleTextModel = () =>{
        const textModel = new Array<TextModel>()
        const fieldsModel = new Array<fieldInterface>()
        for(let i =0; i<type!.content.length; i++){
            textModel[i] = {
                name: type!.content[i],
                content: texts[i],
                position: pos[i]
            }
        }

        for(let j =0; j<fields.length; j++){
            fieldsModel[j] = {
                field: fields[j],
                value: tagValue[j],
            }
        }

        const preview = {
            title: name,
            contentModel: textModel,
            tags: fieldsModel
        }
         setPreview(preview)
        //  console.log(textModel)

    }

    // console.log(inputs);
    // console.log(type)

    

    return(
        <>
            {
                type 
                ?
                    (
                        <Container showModal={ showModal }>
                            <Header> {title}
                            <CloseBtn onClick={() => {
                                toggleModal();
                                // window.location.reload();
                            }}> <IoMdClose /> </CloseBtn>
                            </Header>
                            <OptionsWrapper>
                                <ShortInputsDiv style={{ flexDirection:'column', alignItems:'flex-start' }}>
                                    <ShortInput title={'Nome do modelo'}> <Input onChange={(e: { target: { value: SetStateAction<string>; }; }) => setName(e.target.value.toString())} /> </ShortInput>
                                    {
                                        type.content.map((item, index) => (
                                            <LargeInput key={index} title={item}> 
                                                <LargeTextInput 
                                                onChange={(e: { target: { value: SetStateAction<string>; }; }) => saveText(index, e.target.value.toString())} 

                                                /> 
                                                <SelectStyled key={index} name='pos' onChange={(pos) => {
                                                savePos(index, pos.target.value.toString())
                                                // console.log(tagValue)
                                                }}>
                                                    <OptionStyled value={""} > Alinhamento </OptionStyled>
                                                    <OptionStyled value={"left"}> Esquerda </OptionStyled>
                                                    <OptionStyled value={"center"}> Centro </OptionStyled>
                                                    <OptionStyled value={"right"}> Direita </OptionStyled>
                                                </SelectStyled>
                                            </LargeInput>
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
                                                // console.log(tagValue)
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
                                    handleTextModel()
                                    toggleModal();
                                    toggleModalPreview();
                                }}> 
                                    Preview 
                                </ButtonSecondary>
                            </OptionsWrapper>
                        </Container>
                    )
                :
                    null
            }

        </>
    )
}

export default ModalNewDocumentModel;