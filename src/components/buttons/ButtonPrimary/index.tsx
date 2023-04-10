import { MouseEventHandler } from "react";
import { InputButton } from "./style";

const ButtonPrimary = ({ action, children }: { action: MouseEventHandler<HTMLDivElement>, children: string }):JSX.Element => {
    return(
        <InputButton onClick={action}> { children } </InputButton>
    )
};

export default ButtonPrimary;