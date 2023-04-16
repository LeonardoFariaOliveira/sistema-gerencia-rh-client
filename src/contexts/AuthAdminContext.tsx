import { createContext } from "react";

interface AuthAdminContextInterface{
    token: Promise<string> | null;
    name: Promise<string> | null;
    login: (user: string, password: string) => Promise<void>;
}

export const AuthAdminContext = createContext<AuthAdminContextInterface>(null!)