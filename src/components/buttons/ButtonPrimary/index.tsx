import React, { ButtonHTMLAttributes } from "react";
import { InputButton } from "./style";

const ButtonPrimary: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => {
    return(
        <InputButton {...props}> { children } </InputButton>
    )
};

export default ButtonPrimary;