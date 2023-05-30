import { InputHTMLAttributes, useCallback } from 'react';
import { InputStyled } from './style'
import { cep, cnpj, cpf, date } from '../masks';

export interface InputProps extends InputHTMLAttributes<HTMLTextAreaElement>{
    mask?: "cpf" | "date" | "cnpj" | "cep";
    block?:boolean;
}

const Input:React.FC<InputProps> = ({...props}) => {

  // console.log("block:"+block)


    return(
            <InputStyled
            {...props}
            wrap='true'
            spellCheck
            />
    )
};
export default Input
