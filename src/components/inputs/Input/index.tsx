import { InputHTMLAttributes, useCallback } from 'react';
import { InputStyled } from './style'
import { cep, cnpj, cpf, date } from '../masks';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    mask?: "cpf" | "date" | "cnpj" | "cep";
    block?:boolean;
}

const Input:React.FC<InputProps> = ({block, mask, ...props}) => {

  // console.log("block:"+block)
    const handleOnKeyUp = useCallback((e: React.FormEvent<HTMLInputElement>) => {

    if(mask === 'cpf'){ cpf(e); }
    if(mask === 'date'){ date(e); }
    if(mask === 'cnpj'){ cnpj(e); }
    if(mask === 'cep'){ cep(e); }
        
      },
      [],
    )

    return(
            <InputStyled 
            block = {block}
            {...props}
            onKeyUp={handleOnKeyUp}
            />
    )
};
export default Input
