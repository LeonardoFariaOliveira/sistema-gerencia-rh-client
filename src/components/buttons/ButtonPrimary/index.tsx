import { InputButton } from "./style";

interface ButtonProps {
    children: string;
    action: Function;
}

const ButtonPrimary = ({ children, action }: ButtonProps):JSX.Element => {
    return(
        <InputButton onClick={(e) => action}> { children } </InputButton>
    )
};

export default ButtonPrimary;