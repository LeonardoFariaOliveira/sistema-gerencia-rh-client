import { createContext } from "react";

interface AuthUserContextInterface{
    tokenUser: string | null;
    loginUser: (user: string, password: string) => void;
}

export const AuthUserContext = createContext<AuthUserContextInterface>(null!)