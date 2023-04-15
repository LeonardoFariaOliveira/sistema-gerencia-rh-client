import { InputHTMLAttributes, useCallback } from 'react';
import { InputStyled } from './style'
import { cep, cnpj, cpf, date } from '../masks';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    mask?: "cpf" | "date" | "cnpj" | "cep";
}

const Input:React.FC<InputProps> = ({mask, ...props}) => {


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
            {...props}
            onKeyUp={handleOnKeyUp}
            />
    )
};
export default Input
