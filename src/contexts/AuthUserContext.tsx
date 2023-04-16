import { createContext } from "react";

interface AuthUserContextInterface{
    tokenUser: Promise<string> | null;
    idUser: Promise<string> | null;
    popularNameUser: Promise<string> | null;
    loginUser: (user: string, password: string) => Promise<void>;
}

export const AuthUserContext = createContext<AuthUserContextInterface>(null!)