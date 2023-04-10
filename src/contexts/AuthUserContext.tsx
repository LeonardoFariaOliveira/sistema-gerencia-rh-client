import { createContext } from "react";

interface AuthUserContextInterface{
    tokenUser: Promise<string> | null;
    loginUser: (user: string, password: string) => void;
}

export const AuthUserContext = createContext<AuthUserContextInterface>(null!)