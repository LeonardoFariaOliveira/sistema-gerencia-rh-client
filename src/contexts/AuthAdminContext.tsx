import { createContext } from "react";

interface AuthAdminContextInterface{
    token: string | null;
    login: (user: string, password: string) => void;
}

export const AuthAdminContext = createContext<AuthAdminContextInterface>(null!)