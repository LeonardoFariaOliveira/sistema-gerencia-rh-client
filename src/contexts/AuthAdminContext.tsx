import { createContext } from "react";

interface AuthAdminContextInterface{
    token: Promise<string> | null;
    login: (user: string, password: string) => void;
}

export const AuthAdminContext = createContext<AuthAdminContextInterface>(null!)